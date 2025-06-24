from flask import Blueprint, render_template

nosotros_bp = Blueprint('nosotros', __name__)

@nosotros_bp.route('/nosotros')
def inicio():
    return render_template('public/nosotros.html')