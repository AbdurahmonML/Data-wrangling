from flask import Flask, render_template, jsonify
from flask import Flask, render_template, jsonify, request
import sqlite3
import os
from prettytable import PrettyTable
from bs4 import BeautifulSoup
import requests
import re

app = Flask(__name__)
db_path = 'films.db'

import sqlite3

films_data = [
    ("The Shawshank Redemption", 1994, "$28,341,469", "UK"),
    ("The Godfather", 1972, "$250,000,000", "USA"),
    ("The Dark Knight", 2008, "$1,005,973,645", "USA"),
    ("Schindler's List", 1993, "$322,177,000", "USA"),
    ("Pulp Fiction", 1994, "$213,928,762", "USA"),
]

def init_db():
    def extract_alphabetic_substring(text):
        
        if text[:13] == 'United States':
            return 'United States'
        if text[:14] == 'United Kingdom':
            return 'United Kingdom'
        for i, char in enumerate(text):
            if not char.isalpha() and char != ' ':  
                return text[:i]
        return text  

    def getHTMLdocument(url):
        response = requests.get(url)
        return response.content

    def get_country_from_movie_page(movie_url):
        movie_html = getHTMLdocument(movie_url)
        movie_soup = BeautifulSoup(movie_html, 'html.parser')
        
        infobox = movie_soup.find('table', {'class': 'infobox'})
        
        if infobox:
            rows = infobox.find_all('tr')
            for row in rows:
                header = row.find('th')
                if header and 'Countries' in header.get_text():
                    country_td = row.find('td')
                    if country_td:
                        country_text = country_td.get_text(strip=True)
                        print(country_text)
                        return extract_alphabetic_substring(country_text)
                if header and 'Country' in header.get_text():
                    country_td = row.find('td')
                    if country_td:
                        country_text = country_td.get_text(strip=True)
                        return extract_alphabetic_substring(country_text)
                        
        return "Country not found"

    url_to_scrape = "https://en.wikipedia.org/wiki/List_of_highest-grossing_films"

    html_document = getHTMLdocument(url_to_scrape)

    soup = BeautifulSoup(html_document, 'html.parser')

    table = soup.find('table', {'class': 'wikitable'})
    films_data = []
    for row in table.find_all('tr')[1:]:
        movie_title = None
        revenue = None
        year = None
        country = "Unknown"
        
        cnt = 0
        for i in row.find_all('td'):
            cnt += 1
            
            if cnt == 3:
                revenue = i.get_text(strip=True)
            
            if cnt == 4:
                year = i.get_text(strip=True)

        movie_name_tag = row.find('th')
        
        if movie_name_tag:
            movie_link = movie_name_tag.find('a')  # <a> inside <th>
            if movie_link:
                movie_title = movie_link.get_text(strip=True)  # Movie name
                movie_url = "https://en.wikipedia.org" + movie_link.get('href')  # Full URL
                
                country = get_country_from_movie_page(movie_url)
                
        if movie_title and revenue and year:
            films_data.append((movie_title, year, revenue, country))
        

    print("Films Data Before Insertion:")
    for film in films_data:
        print(film)

    print(f"Films data length before inserting into DB: {len(films_data)}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute('DROP TABLE IF EXISTS films')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS films (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            year INTEGER,
            revenue TEXT,  -- Revenue column (not numeric)
            country TEXT
        )
    ''')

    cursor.executemany('''
        INSERT INTO films (title, year, revenue, country) 
        VALUES (?, ?, ?, ?)
    ''', films_data)

    conn.commit()

    cursor.execute('SELECT * FROM films')
    films = cursor.fetchall()
    
    print("Films in the Database:")
    table = PrettyTable(["ID", "Title", "Year", "Revenue", "Country"])
    for film in films:
        table.add_row(film)
    print(table)

    cursor.execute('SELECT COUNT(*) FROM films')
    count = cursor.fetchone()[0]
    print(f"Films data length after inserting into DB: {count}")

    conn.close()

@app.route('/')
def home():
    init_db()
    return "Database initialized and ready!"

@app.route('/films')
def films():
    search_term = request.args.get('search', '').strip().lower()  
    sort_by = request.args.get('sort', 'year')  
    sort_order = request.args.get('order', 'asc')  

    query = 'SELECT * FROM films WHERE LOWER(title) LIKE ?'
    
    if sort_order == 'asc':
        query += f' ORDER BY {sort_by} ASC'
    else:
        query += f' ORDER BY {sort_by} DESC'

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute(query, ('%' + search_term + '%',))
    films = cursor.fetchall()
    conn.close()

    return render_template('films.html', films=films, search_term=search_term, sort_by=sort_by, sort_order=sort_order)

@app.route('/api/films')
def api_films():
    search_term = request.args.get('search', '').strip().lower()  
    sort_by = request.args.get('sort', 'year')  
    sort_order = request.args.get('order', 'asc')  

    query = 'SELECT * FROM films WHERE LOWER(title) LIKE ?'
    
    if sort_order == 'asc':
        query += f' ORDER BY {sort_by} ASC'
    else:
        query += f' ORDER BY {sort_by} DESC'

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute(query, ('%' + search_term + '%',))
    films = cursor.fetchall()
    conn.close()

    film_data = [
        {
            'title': film[1],
            'year': film[2],
            'revenue': film[3],
            'country': film[4]
        }
        for film in films
    ]
    return jsonify(film_data)

if __name__ == '__main__':
    app.run(debug=True)
