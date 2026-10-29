/* aide.js — mode d'emploi du générateur de convocations CCF (lu par eps-aide.js) */
window.EPS_AIDE={appli:'Convocations CCF EPS',bouton:false,
pied:'La liste des élèves reste dans le navigateur : rien n’est envoyé.',
publics:[{id:'prof',titre:'Professeur',chapitres:[
{t:'Démarrer : le diplôme',html:`<p>Au lancement, choisissez <b>Bac général et technologique</b>, <b>Bac professionnel</b> ou <b>CAP</b> : les textes par défaut suivent. <span class="bouton">🏠 Diplôme</span> en haut pour en changer.</p>`},
{t:'Les 3 onglets',html:`<ol>
<li><b>Import des données</b> : glissez le fichier Excel de la classe (Pronote). <span class="bouton">🔍 Détection auto</span> repère les colonnes ; corrigez-les si besoin, puis <span class="bouton">Voir les élèves →</span>.</li>
<li><b>Personnalisation</b> : établissement, activité, date et créneau de l’épreuve, lieu, textes, mention IMPORTANT, logo, signature ou cachet. L’aperçu se met à jour en direct.</li>
<li><b>Élèves & génération PDF</b> : cochez les élèves (<span class="bouton">☑ Tout sél. / désél.</span>, recherche), puis <span class="bouton">🖨️ Générer les convocations PDF</span> : 3 par page A4.</li></ol>`},
{t:'Garder ses réglages',html:`<ul>
<li><span class="bouton">⬇️ Exporter config</span> enregistre vos textes, logo et signature dans un fichier ; <span class="bouton">⬆️ Importer config</span> les recharge sur un autre ordinateur ou l’an prochain.</li></ul>`},
{t:'Hors ligne, lecture facilitée',html:`<ul>
<li>Ouvrez l’outil une fois avec du réseau : il marche ensuite sans réseau.</li>
<li><b>Lecture facilitée</b> (case en haut) : police plus lisible, lettres espacées. Le choix vaut pour toutes les applis EPS de l’appareil. Le PDF produit n’est pas modifié.</li></ul>`}]}]};
