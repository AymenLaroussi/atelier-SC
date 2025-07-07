from flask import Blueprint, request, jsonify
from models import db, Participant
import requests
from config import Config

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    data = request.json
    participant = Participant(nom=data['nom'], email=data['email'])
    db.session.add(participant)
    db.session.commit()
    return jsonify({'message': 'Participant enregistré avec succès'}), 201


@api.route('/ateliers', methods=['GET'])
def list_ateliers():
    try:
        response = requests.get(f"{Config.LARAVEL_API_URL}/ateliers")
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@api.route('/inscription', methods=['POST'])
def inscrire_atelier():
    data = request.json
    atelier_id = data['atelier_id']
    participant_id = data['participant_id']
    
    try:
        response = requests.post(
            f"{Config.LARAVEL_API_URL}/ateliers/{atelier_id}/formateurs/1",  # assuming 1 formateur
            headers={"Accept": "application/json"}
        )

        # manually insert into pivot if Laravel doesn’t handle inscription
        db.session.execute("""
            INSERT INTO atelier_participant (atelier_id, participant_id)
            VALUES (:atelier_id, :participant_id)
        """, {'atelier_id': atelier_id, 'participant_id': participant_id})
        db.session.commit()

        return jsonify({'message': 'Inscription réussie'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
