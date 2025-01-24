from flask import Flask, render_template, request, redirect, url_for, flash
from dotenv import load_dotenv
import os
from flask_mysqldb import MySQL

load_dotenv()

app = Flask(__name__)
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')
app.secret_key = os.getenv('SECRET_KEY')

mysql = MySQL(app)

@app.route('/')
def index():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM contacts')
    data = cursor.fetchall()
    mysql.connection.commit()
    print(data)
    return render_template('index.html', contacts=data)
    
@app.route('/add_contact', methods=['POST'])
def add_contact():
    if request.method == 'POST':
        fullname = request.form.get('fullname')
        phone = request.form.get('phone')
        email = request.form.get('email')

        try:
            cursor = mysql.connection.cursor()
            cursor.execute('INSERT INTO contacts (fullname, phone, email) VALUES (%s, %s, %s)', (fullname, phone, email))
            mysql.connection.commit()
            flash('Contacto añadido correctamente')
        except Exception as e:
            print(f"Error al añadir contacto: {e}")
            flash('Error al añadir contacto')
        
        return redirect(url_for('index'))

@app.route('/edit/<string:id>')
def edit(id):
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM contacts WHERE id={}',(id,))
    data = cursor.fetchall()
    print(data[0])
    return render_template('edit_contact.html', contact=data[0])

@app.route('/update/<string:id>', methods=['POST'])
def update(id):
    if request.method == 'POST':
        fullname = request.form.get('fullname')
        phone = request.form.get('phone')
        email = request.form.get('email')

        try:
            cursor = mysql.connection.cursor()
            cursor.execute('UPDATE contacts SET fullname=%s, phone=%s, email=%s WHERE id=%s', (fullname, phone, email, id))
            mysql.connection.commit()
            flash('Contacto actualizado correctamente')
        except Exception as e:
            print(f"Error al actualizar contacto: {e}")
            flash('Error al actualizar contacto')

        return redirect(url_for('index'))

@app.route('/delete/<string:id>')
def delete(id):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute('DELETE FROM contacts WHERE id={}'(id,))
        mysql.connection.commit()
        flash('Contacto eliminado correctamente')
    except Exception as e:
        print(f"Error al eliminar contacto: {e}")
        flash('Error al eliminar contacto')

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
