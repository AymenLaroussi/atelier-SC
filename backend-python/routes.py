from flask import Blueprint, request, jsonify
from models import db, Participant
import requests
from config import Config
import bcrypt
import datetime

api = Blueprint('api', __name__)

# @api.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     participant = Participant(nom=data['nom'], email=data['email'])
#     db.session.add(participant)
#     db.session.commit()
#     return jsonify({'message': 'Participant enregistré avec succès'}), 201


@api.route('/ateliers', methods=['GET'])
def list_ateliers():
    try:
        response = requests.get(f"{Config.LARAVEL_API_URL}/ateliers")
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api.route('/login', methods=['POST'])
def login_participant():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = db.session.execute(
        db.text("SELECT * FROM users WHERE email = :email"),
        {'email': email}
    ).fetchone()

    if not user:
        return jsonify({'error': 'User not found'}), 404

    if not bcrypt.checkpw(password.encode(), user.password.encode()):
        return jsonify({'error': 'Incorrect password'}), 401

    return jsonify({'id': user.id}), 200

@api.route('/register', methods=['POST'])
def register_participant():
    data = request.get_json()
    nom = data.get('nom')
    email = data.get('email')
    password = data.get('password')

    if not nom or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    existing_user = db.session.execute(
        db.text("SELECT * FROM users WHERE email = :email"),
        {'email': email}
    ).fetchone()

    if existing_user:
        return jsonify({'error': 'Email already registered'}), 409

    new_participant = Participant(nom=nom, email=email)
    db.session.add(new_participant)
    db.session.flush()  

    hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

    db.session.execute(
        db.text("""
            INSERT INTO users (name, email, password)
            VALUES (:name, :email, :password)
        """),
        {
            'name': nom,
            'email': email,
            'password': hashed_pw
        }
    )

    db.session.commit()
    return jsonify({'message': 'Participant registered successfully'}), 201

