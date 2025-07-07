# 🎨 Plateforme de gestion d’ateliers de formation - Fullstack Project

Application de gestion d'ateliers avec **inscription**, **consultation** et **système modulaire**. Ce projet est structuré en 3 parties :  

- 🧠 Backend Laravel
- 🐍 Backend Flask
- 🅰️ Frontend Angular

---

## ⚙️ Prérequis

Assurez-vous d’avoir installé :

- **PHP ≥ 8.1**, Composer, XAMPP (MySQL)
- **Python 3.10+**, pip, Flask
- **Node.js 18+**, Angular CLI

---

## 🧠 Backend 1 - Laravel (Gestion des ateliers)

### 🚀 Installation

```bash
cd backend-laravel
composer install
changer .env.example .env
php artisan migrate
php artisan serve
```


### 🌐 Endpoints principaux


| Méthode | URL                 | Description              |
|--------|---------------------|--------------------------|
| GET    | `/api/ateliers`     | Lister tous les ateliers |
| POST   | `/api/ateliers`     | Créer un atelier         |


---

## 🐍 Backend 2 - Flask (Inscriptions)

### 🚀 Installation

```bash
cd backend-flask
python -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows

pip install -r requirements.txt
python run.py
```

### 📦 Structure

- `app.py` — point d’entrée principal
- `models.py` — modèles SQLAlchemy
- `config.py` — configuration de la DB (MySQL via XAMPP)
- `routes/` — contient les endpoints

### 🧩 Base de données

Créer la base `sc` dans **phpMyAdmin** (XAMPP), puis dans `config.py` :

```python
SQLALCHEMY_DATABASE_URI = 'mysql://root:@localhost/sc'
```

### 🌐 Endpoints principaux

| Méthode | URL                 | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/register`         | Enregistrer un participant       |
| POST   | `/login`      | Se connecter |
| GET    | `/ateliers`         | Liste des ateliers (via Laravel) |
| GET    | `/atelier/{id}/formateur/{id}`         | assigner atelier to formateur |

---

## 🅰️ Frontend - Angular (Formulaires + UI)

### 🚀 Installation

```bash
cd frontend-angular
npm install
ng serve
```

### 🧱 Technologies

- Angular 16
- Reactive Forms
- Routing
- Services HTTP
- Architecture modulaire



### 🌐 Services HTTP

```ts
this.http.post('http://localhost:5000/register', formData);
this.http.get('http://localhost:8000/api/ateliers');
this.http.get('http://localhost:5000/participants');
this.http.post('http://localhost:5000/login', formData);


## 🧪 Tests rapides

1. 🧠 Démarrer le backend Laravel : `php artisan serve`
2. 🐍 Démarrer Flask : `python app.py`
3. 🅰️ Lancer Angular : `ng serve`
4. Accéder à `http://localhost:4200`



