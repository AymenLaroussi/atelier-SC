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
| POST   | `/api/ateliers`     | Créer un Atelier         |
| PUT    | `/api/atelier/{ID}` | Mettre à jour un Atelier |
| DELETE | `/api/ateliers/{ID}` | Supprimer un Atelier  |
| POST   | `/api/atelier/{atelier}/participant/{participant}` | Liste atelier par participant |
| GET   | `/api/participants` | Lister les participants |
| POST   | `/api/participants` | Créer un participant |
| GET    | `/atelier/formateur/{formateur}` | Lister les atelier par formateur |



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

| Méthode | URL        | Description    |
|--------|-------------|----------------|
| POST   | `/register` | Crée un compte |
| POST   | `/login`    | Se connecter   |


## Payload 
### Ateliers
```bash
    {
        "titre": string,
        "description": string,
        "created_at": datetime,
        "updated_at": datetime
    },
```
### Participants
```bash
    { 
        "nom": string,
        "email": string,
        "created_at": datetime,
        "updated_at": datetime
    }  
```
### Formateurs
```bash
    { 
        "nom": string,
        "email": string,
        "created_at": datetime,
        "updated_at": datetime
    }  
```
### Users
```bash
    { 
        "name": string,
        "email": string,
        "password": string,
        "created_at": datetime,
        "updated_at": datetime
    }  
```
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



### 🌐 Routes

```ts
'http://localhost:5000/participants/register'
'http://localhost:5000/login'
'http://localhost:8000/api/ateliers'
'http://localhost:5000/participants'



## 🧪 Tests rapides

1. 🧠 Démarrer le backend Laravel : `php artisan serve`
2. 🐍 Démarrer Flask : `python app.py`
3. 🅰️ Lancer Angular : `ng serve`
4. Accéder à `http://localhost:4200`



