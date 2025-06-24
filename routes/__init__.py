# Registro de rutas

from .index import index_bp
from .procesos import procesos_bp
from .nosotros import nosotros_bp
from .actividades import actividades_bp
from .donaciones import donaciones_bp
from .contacto import contacto_bp

blueprints = [
    index_bp,
    procesos_bp,
    nosotros_bp,
    actividades_bp,
    donaciones_bp,
    contacto_bp


]