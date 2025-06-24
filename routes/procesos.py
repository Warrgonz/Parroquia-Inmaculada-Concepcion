from flask import Blueprint, render_template

procesos_bp = Blueprint('procesos', __name__)

@procesos_bp.route('/procesos')
def inicio():
    return render_template('public/procesos.html')