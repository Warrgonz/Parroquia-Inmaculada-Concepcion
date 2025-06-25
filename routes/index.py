from flask import Blueprint, render_template

index_bp = Blueprint('index', __name__)

@index_bp.route('/')
def inicio():
    return render_template('public/index.html')


@index_bp.route('/nosotros')
def nosotros():
    return render_template('public/nosotros.html')

@index_bp.route('/dashboard')
def inicio_dashboard():
    return render_template('private/inicio.html')