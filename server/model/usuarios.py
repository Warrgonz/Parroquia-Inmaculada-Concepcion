from utils.db import db

class Usuarios(db.Model):
    __tablename__ = 'usuarios'
    id_usuario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cedula = db.Column(db.Integer, unique=True, nullable=False)

    def __init__(self, cedula):
        self.cedula = cedula

        