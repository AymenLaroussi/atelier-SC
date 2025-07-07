class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@localhost/sc'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'secret-key'
    LARAVEL_API_URL = 'http://127.0.0.1:8000/api'
