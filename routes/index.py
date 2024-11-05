from flask import Blueprint, render_template

index_bp = Blueprint('index', __name__)

@index_bp.route('/')
def inicio():
    return render_template('home/index.html')
