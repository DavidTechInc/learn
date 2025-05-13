# Étape 1: Utiliser une image de Node.js
FROM node:18-alpine

# Étape 2: Créer et définir le répertoire de travail
WORKDIR /app

# Étape 3: Copier le fichier package.json dans le container
COPY package.json ./

# Étape 4: Installer les dépendances
RUN npm install --legacy-peer-deps  # Utilise --legacy-peer-deps pour contourner les erreurs de dépendances si nécessaire

# Étape 5: Copier tous les fichiers du projet dans le container
COPY . .

# Étape 6: Exposer le port 3000
EXPOSE 3000

# Étape 7: Lancer l'application
CMD ["npm", "start"]
