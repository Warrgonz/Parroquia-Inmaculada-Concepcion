from flask import Blueprint, render_template

contacto_bp = Blueprint('contacto', __name__)

@contacto_bp.route('/contactenos')
def inicio():
    return render_template('public/contacto.html')