from flask import Blueprint, render_template

grupos_bp = Blueprint('grupos', __name__)

@grupos_bp.route('/grupos/admin')
def grupos():
    return render_template('private/grupos.html')