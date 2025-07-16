from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['UPLOAD_FOLDER'] = 'uploads'
db = SQLAlchemy(app)

from models import User, Punch

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/api/punch', methods=['POST'])
def punch():
    data = request.json
    pin = data.get('pin')
    action = data.get('action')

    user = User.query.filter_by(pin=pin).first()
    if not user:
        return jsonify({'error': 'Invalid PIN'}), 404

    punch = Punch(user_id=user.id, action=action)
    db.session.add(punch)
    db.session.commit()

    return jsonify({'message': f'{action.capitalize()} logged'}), 200

@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': u.id, 'name': u.name, 'pin': u.pin} for u in users])

@app.route('/')
def home():
    return "Timeclock backend is running."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
