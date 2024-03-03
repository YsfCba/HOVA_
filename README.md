# Conception de d'application HOVA

## À propos

HOVA est une application de sport qui propose à ses utilisateurs de pouvoir suivre un programme sportif et ainsi avoir un suivi quotidien, entrainement après entrainement, suivre ses efforts, ses progrès et ses objectifs. L’application propose à ses utilisateurs deux options :
- Pouvoir s’entrainer avec des programmes déjà préconçu et certifier par des professionnels. En fonction les objectifs ; perte de poids, prise de masse ou autre.
- Pouvoir personnaliser ses programmes, c’est-à-dire que l’utilisateur en fonction de son objectif, aura la possibilité de personnaliser ses séances en choisissant les exercices.
Toutes ces données devront communiquer avec une base de données via une API REST pour recevoir la liste et les détails de chaque programme d’entrainement (machine à utiliser s’il y en a l’utilité, le nombre de séries et répétitions ainsi que quelques conseils et informations concernant l’exercice etc). L’application devra guider l’utilisateur tout au long de sa séance d’entrainement.

- 🪧 [À propos](#à-propos)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🤝 [Contribution](#contribution)
- 🏗️ [Construit avec](#construit-avec)
- 📚 [Documentation](#documentation)
- 🏷️ [Règle de Gestion](#Règle)
- 📝 [Licence](#licence)

## Prérequis

[Liste de tous les éléments nécessaires pour le bon fonctionnement du projet avec description + lien vers la documentation]

## Installation

[Étapes avec exemples des commandes à lancer pour installer le projet en local]

## Utilisation

[### Sous-titre + description avec exemple des commandes à lancer pour l'ensemble des actions disponibles à l'utilisation dans un mode de développement]

## Contribution

[### Sous-titre + description avec exemple des commandes à lancer pour l'ensemble du flux de contribution sur le dépôt]

## Construit avec

### Langages & Frameworks

- Angular
- IONIC
- Capacitor
- Node JS

### Outils

#### CI

- Github Action

#### Déploiement

VPS simplon

## Documentation



## Règle

Règle de Gestion des Comptes Utilisateurs 

* Chaque utilisateur doit s'inscrire avec une adresse e-mail valide, un nom d'utilisateur et un mot de passe sécurisé conforme aux normes définies (longueur, complexité).
* Les utilisateurs doivent confirmer leur adresse e-mail via un lien d'activation envoyé à leur adresse pour finaliser la création du compte.

Règles de Gestion des Profils Locataires et Propriétaires

* Les profils de locataires créés par les propriétaires/agences nécessitent le consentement écrit du locataire, à obtenir via un mécanisme sécurisé intégré à l'application (par exemple, signature électronique).
* Les propriétaires ne peuvent créer des profils de locataire que pour des individus avec lesquels ils ont eu ou ont actuellement une relation contractuelle de location.

Règles de Gestion des Programmes

* Les Programmes ne peuvent être soumis que si le nom est renseigné
* Chaque Programmes est associé a au minumum une séance
* Les utilisteurs peuvent mettre en favorie les programmes
 
Règles de Gestion des Séances

* Les Séances ne peuvent être soumis que si le nom, le groupe musculaire ainsi que l'utilisation ou non de matériel sont renseignés
* Chaque Séances est associé a au minumum un exercices
* Les utilisteurs peuvent mettre en favorie les séances

Règles de Gestion des Exercices

* Les Exercices ne peuvent être soumis que si le nom, le nombre de répétition, le nombre de série et le temps de repos sont renseignés
* Les utilisteurs peuvent mettre en favorie les exercices

Règles de Gestion du masse corporelle

* Chaque utilisateur peut renseigner son poids et sa taille afin d'avoir un visuel sur son evolution corporelle

Règles de Gestion de localisation de salle de sport

* Les utilisateurs peuvent acceder au salle de sport a proximiter de leur position si besoin
* Les utilisteurs peuvent mettre en favorie les salles sports

  
## RBAC


| Permissions                                                   		      | Administrateur 	| Propriétaires/Agence Immobilière 	| Locataire 	| Visiteur 	|
|-----------------------------------------------------------------------|:--------------:	|:--------------------------------:	|:--------------:	|:----:	|
|                     	**Permission Administrateur**                 	  |                	|           						                  |                	|      	|
| Gérer les comptes utilisateurs (création, supression, suspension) 	   |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Modérer les avis (validation, supression des avis inappropriés) 		    |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Accéder à toutes les fiches locataires et propriétaires				           |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Gérer le système de notifications et les paramètres de l'application	 |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Analyser les données d'usage de l'application 						                  |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
|            			**Permission Propriétaires/Agence**	           	        |                	|     			      				 |                	|      	|
| Créer des fiches locataire avec leur consentement					 	              |        ✅       |     			✅     				|        ❌      	|   ❌  	|
| Publier des avis sur les locataires									                          |        ✅       |     			✅     				|        ❌      	|   ❌  	|
| Recevoir des notifications sur les avis concernant 								
  leurs propriétés ou sur eux-mêmes										                           |        ✅       |     			✅     				|        ❌       	|   ❌  	|
| Consulter et répondre aux avis reçus									                         |        ✅       |     			✅     				|        ❌       	|   ❌  	|
|            			**Permission Locataire**	            		                 |                	|   							 	|                	|      	|
| Créer des fiches propriétaire											                              |        ✅       |     			❌     				|        ✅       	|   ❌  	|
| Publier des avis sur les propriétaires et logements					              |        ✅       |     			❌     				|        ✅       	|   ❌  	|
| Recevoir des notifications sur les avis publiés à leur sujet			       |        ✅       |     			❌     				|        ✅       	|   ❌  	|
| Consulter et répondre aux avis reçus									                         |        ✅       |     			❌     				|        ✅       	|   ❌  	|
|            **Permission Visiteir(Utlisateir non authentifié)**	       |                	|     			      				|                	|      	|
| Consulter les classements et les avis publics                       	 |        ✅       |     			✅     				|        ✅       	|   ✅  	|
| Rechercher des logements et propriétaires                       		    |        ✅       |     			✅     				|        ✅       	|   ✅  	|

## Dictionnaire

# Dictionnaire de données

Table Utilisateur
| Champ          | Type de Données | Description                             | Contrainte                        | Exemple                                 |
|----------------|-----------------|-----------------------------------------|-----------------------------------|-----------------------------------------|
| UUID           | UUID            | Identifiant unique de l'utilisateur     | Clé primaire                      | `f47ac10b-58cc-4372-a567-0e02b2c3d479`   |
| UserName       | VARCHAR         | Nom d'utilisateur                       | Unique, Non nul                   | `Radouan`                               |
| Email          | VARCHAR         | Adresse mail                            | Unique, Non nul                   | `radouan@location.com`                  |
| PasswordHash   | VARCHAR         | Hash du mot de passe                    | Non nul                           | `5f4dcc3b5aa765d61d8327deb882cf99`       |
| Role           | ENUM            | Rôle de l'utilisateur                   | Non nul                           | `Admin`                                 |
| DateCreated    | DATETIME        | Date de création du compte              | Non nul                           | `2024-02-02 12:00:00`                   |
| LastLogin      | DATETIME        | Date de la dernière connexion           |                                   | `2024-02-28 08:30:00`                   |


Table Profil Locataire
| Champ         | Type de Données | Description                           | Contrainte                         | Exemple                                 |
|---------------|-----------------|---------------------------------------|------------------------------------|-----------------------------------------|
| TenantID      | INT             | Identifiant unique du profil locataire| Clé primaire, Auto-incrément      | 9                                       |
| UUID          | UUID            | Identifiant de l'utilisateur          | Clé étrangère -> Utilisateur       | `f47ac10b-58cc-4372-a567-0e02b2c3d479`   |
| FirstName     | VARCHAR         | Prénom                                | Non nul                            | `Radouan`                               |
| LastName      | VARCHAR         | Nom de famille                        | Non nul                            | `Rachidi`                               |
| Nationality   | VARCHAR         | Nationalité du locataire              |                                    | `Français`                              |
| DateOfBirth   | DATETIME        | Date de naissance                     |                                    | `2001-12-19 00:00:00`                   |
| ConsentStatus | BOOLEAN         | Consentement pour le profil           | Non nul                            | True                                    |


Table Profil Propriétaire
| Champ        | Type de Données | Description                             | Contrainte                         | Exemple                                 |
|--------------|-----------------|-----------------------------------------|------------------------------------|-----------------------------------------|
| OwnerID      | INT             | Identifiant unique du profil propriétaire| Clé primaire, Auto-incrément     | 1                                       |
| UUID         | UUID            | Identifiant de l'utilisateur            | Clé étrangère -> Utilisateur       | `e64c26d8-3b75-4b2a-9b5d-689d26f82a1d`   |
| FirstName    | VARCHAR         | Prénom                                  | Non nul                            | `Leila`                                 |
| LastName     | VARCHAR         | Nom de famille                          | Non nul                            | `Bennani`                               |
| Nationality  | VARCHAR         | Nationalité                             |                                    | `Marocain`                              |
| BirthDate    | DATETIME        | Date de naissance                       |                                    | `1975-05-15 00:00:00`                   |


Table Notification
| Champ           | Type de Données | Description                               | Contrainte                       | Exemple                                 |
|-----------------|-----------------|-------------------------------------------|----------------------------------|-----------------------------------------|
| NotificationID  | INT             | Identifiant unique de la notification     | Clé primaire, Auto-incrément    | 15                                      |
| UUID            | UUID            | Identifiant de l'utilisateur destinataire | Clé étrangère, Non nul           | `a85ec5d3-3cfa-4b6c-8f8a-982a555d8e7a`   |
| Message         | TEXT            | Contenu de la notification                | Non nul                          | `Votre avis a été publié avec succès.`   |
| IsRead          | BOOLEAN         | Statut de lecture de la notification      | Non nul, def -> False            | False                                   |
| DateSent        | DATETIME        | Date d'envoi de la notification           | Non nul                         


Table Logement
| Champ          | Type de Données | Description                              | Contrainte                       | Exemple                                 |
|----------------|-----------------|------------------------------------------|----------------------------------|-----------------------------------------|
| PropertyID     | INT             | Identifiant unique du logement           | Clé primaire, Auto-incrément    | 27                                      |
| OwnerID        | INT             | Identifiant du propriétaire du logement  | Clé étrangère -> OwnerProfiles   | 15                                      |
| Address        | VARCHAR         | Adresse complète du logement             | Non nul                          | `123 Rue de l'Exemple, 75001 Paris`     |
| PropertyStatus | VARCHAR         | État actuel du logement (disponible, loué)| Non nul                          | `Disponible`                            |


Table Classements
| Champ         | Type de Données | Description                              | Contrainte                       | Exemple                                 |
|---------------|-----------------|------------------------------------------|----------------------------------|-----------------------------------------|
| RankingID     | INT             | Identifiant unique du classement         | Clé primaire, Auto-incrément    | 1                                       |
| PropertyID    | INT             | Identifiant du logement concerné          | Clé étrangère -> Properties      | 27                                      |
| AverageRating | FLOAT           | Moyenne des notes du logement            | Non nul -> 1 à 5                 | 4.5                                     |
| TotalReviews  | INT             | Nombre total d'avis reçus pour le logement| Non nul Min 0                   | 10                                      |


Table Avis
| Champ          | Type de Données | Description                              | Contrainte                       | Exemple                                 |
|----------------|-----------------|------------------------------------------|----------------------------------|-----------------------------------------|
| ReviewID       | INT             | Identifiant unique de l'avis             | Clé primaire, Auto-incrément    | 33                                      |
| ReviewerID     | INT             | Identifiant de l'utilisateur qui écrit l'avis | Clé étrangère vers Users     | `123e4567-e89b-12d3-a456-426614174000`  |
| ReviewedUserID | FLOAT           | Identifiant de l'utilisateur concerné par l'avis | Clé étrangère vers Users    | `987fbc97-4bed-5078-9f07-9141ba07c9f3`  |
| Rating         | INT             | Note donnée dans l'avis                  | Non nul -> 1 à 5                | 5                                       |
| Comment        | TEXT            | Commentaire textuel de l'avis            | Nullable                        | `Très satisfait de la location.`         |
| ReviewDate     | DATE            | Date à laquelle l'avis a été publié      | Non nul                          | `2024-02-27`                            | 
