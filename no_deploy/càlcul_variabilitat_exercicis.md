# Proposta d'Adaptació i Variabilitat Basada en la Salut per a Kora360

Aquesta proposta tècnica i metodològica defineix un model d'adaptació d'exercicis personalitzat basat en les directrius de l'**ACSM** (American College of Sports Medicine) i la **NSCA** (National Strength and Conditioning Association). L'objectiu és aprofitar les dades recopilades en el perfil de l'usuari (**Edat, Sexe, Nivell de condició física i Pes màxim de mancuernes**) per crear una experiència d'entrenament òptima, segura, i altament eficaç.

---

## 1. Fonaments de Salut i Evidència Esportiva

El disseny de la variabilitat s'estructura a partir de quatre principis biològics fonamentals:

1. **Principi d'Individualització i Seguretat (Edat)**:
   * A mesura que s'envelleix (especialment a partir dels 50-60 anys), la densitat mineral òssia, l'elasticitat dels tendons i la taxa de síntesi de proteïnes musculars disminueixen. El temps de recuperació augmenta.
   * **Criteri de Salut**: Cal introduir un factor de correcció per edat ($F_{edat}$) que redueixi la sobrecàrrega articular i de volum en edats avançades, prioritzant la mobilitat, el control postural i evitant lesions per sobreús (tendinitis, sobrecàrrega lumbar).
2. **Autorregulació del Pes Màxim (Pes de Mancuernes)**:
   * Demanar el "pes màxim de mancuernes" és una eina d'autorregulació excel·lent (propera al concepte d'1RM o una repetició màxima estimada).
   * **Criteri de Salut**: Utilitzar aquesta dada auto-informada com a àncora absoluta garanteix que qualsevol adaptació de pes serà inherentment segura, ja que es calcula sobre la capacitat real expressada per l'usuari.
3. **Diferències Fisiològiques i Metabòliques (Sexe Biològic)**:
   * **Capacitat de recuperació**: Les dones tenen una major proporció de fibres musculars de tipus I (aeròbiques/resistents) i una eliminació de subproductes metabòlics més ràpida a intensitats submàximes. Es recuperen més ràpidament entre sèries.
   * **Força absoluta vs. relativa**: Les diferències en força absoluta (més accentuades al tren superior en homes) ja es corregeixen automàticament mitjançant el camp `pes màxim de mancuernes`.
   * **Criteri de Salut**: L'adaptació per sexe s'ha de centrar en optimitzar els temps de recuperació (descansos) i ajustar lleugerament les repeticions en exercicis de resistència muscular, en lloc d'alterar dràsticament les càrregues.
4. **Sobrecàrrega Progressiva Controlada (Nivell de Condició Física)**:
   * La transició de *Principiant* a *Avançat* ha de gestionar no només l'increment de volum (sèries/reps) i intensitat (pes), sinó també la selecció dels temps de recuperació per evitar el sobreentrenament.

---

## 2. El Model Matemàtic d'Adaptació

Es proposa modificar la funció `getExecutionGoal(exercise)` per implementar un sistema multiplicador conjunt:

### A. Coeficients d'Edat ($F_{edat}$)
L'edat aplicarà un factor de descompressió de volum (repeticions) i intensitat (pes) per protegir la salut articular:

| Rang d'Edat | Coeficient ($F_{edat}$) | Objectiu Clau de Salut |
| :--- | :---: | :--- |
| **Joves i Adults ($\le 45$ anys)** | `1.00` | Rendiment metabòlic i hipertròfia estàndard. |
| **Adults Mitjans ($46 - 60$ anys)** | `0.95` | Manteniment de força, protecció de tendons i prevenció. |
| **Sènior ($61 - 75$ anys)** | `0.85` | Prevenció de sarcopènia, estabilitat articular i control postural. |
| **Gent Gran ($> 75$ anys)** | `0.70` | Seguretat màxima, mobilitat funcional i independència motora. |

### B. Coeficients de Sexe Biològic i Descans ($F_{sexe}$)
S'apliquen ajustos als **temps de descans** i a les repeticions base per alinear-se amb la fisiologia metabòlica:

* **Homes (`home`)**:
  * **Temps de descans estàndard**: `60 segons` (més temps per a la recuperació del sistema fosfagen d'alta potència).
  * **Ajust de repeticions**: `+0` (segueix la base estàndard).
* **Dones (`dona`)**:
  * **Temps de descans estàndard**: `50 segons` (major eficiència metabòlica i capacitat de recuperació de subproductes).
  * **Ajust de repeticions**: `+1` en exercicis resistents (degut a una millor tolerància a la fatiga en rangs submàxims).

---

### C. Fórmules de Càlcul Detallades

#### 1. Pes Suggerit (Dumbbells / Peses)
Per a exercicis que utilitzen peses:

$$\text{Pes Final (kg)} = \text{Math.round}(\text{profile.maxWeight} \times M_{pes\_nivell} \times F_{edat})$$

*On $M_{pes\_nivell}$ és:*
* Principiant: `0.5`
* Intermedi: `0.7`
* Avançat: `0.9`

> **Exemple Pràctic**: Dona de 65 anys, Nivell Intermedi, Pes Màxim de 10 kg.
> * $M_{pes\_nivell} = 0.7$
> * $F_{edat} = 0.85$
> * $\text{Pes Final} = \text{Math.round}(10 \times 0.7 \times 0.85) = \text{Math.round}(5.95) = \mathbf{6\text{ kg}}$ (Segur, protector i adaptat).

#### 2. Repeticions o Durada Finals
Per a exercicis estàndard (excepte comptatges fixos o descansos):

$$\text{Repeticions Finals} = \text{Math.round}(\text{baseReps} \times M_{reps\_nivell} \times F_{edat}) + \Delta_{sexe\_reps}$$

*On $M_{reps\_nivell}$ és:*
* Principiant: `0.8`
* Intermedi: `1.0`
* Avançat: `1.2`

*I $\Delta_{sexe\_reps}$ és:*
* `+1` si el sexe és `dona` (només per a exercicis de tipus repeticions, no en segons/durada).
* `+0` si és `home`.

#### 3. Sèries Finals
Es manté la lògica de sobrecàrrega de volum per nivell, per assegurar una dosi d'exercici adequada:
* Principiant: `baseSets` (mínim estímul eficaç).
* Intermedi: `baseSets` (volum òptim de manteniment).
* Avançat: `baseSets + 1` (estímul de sobrecàrrega).
* *Excepció*: Si $F_{edat} \le 0.70$ (majors de 75 anys), el nombre de sèries es caparà sempre a un màxim de **2 sèries** per evitar la fatiga acumulada excessiva.

#### 4. Temps de Descans Personalitzat
El temps de descans entre exercicis o sèries es calcula adaptant el valor base:

$$\text{Descans (segons)} = \text{Base Descans (60s)} \times F_{descans\_sexe} \times F_{descans\_edat}$$

*On $F_{descans\_sexe}$ és:*
* `1.0` per a `home`
* `0.85` per a `dona` (aprox. 50s)

*I $F_{descans\_edat}$ (més descans per a edats avançades):*
* $\le 60$ anys: `1.0`
* $> 60$ anys: `1.2` (aporta un extra de temps per a la recuperació cardiovascular i articular).

---

## 3. Exemple Comparatiu d'Adaptació per a un mateix Exercici

**Exercici base**: *Flexions de braços a terra* (Suggerit: 3 sèries de 12 repeticions).

| Perfil de l'Usuari | Sèries | Repeticions / Objectiu | Descans Suggerit | Racional de Salut |
| :--- | :---: | :---: | :---: | :--- |
| **Home, 25 anys, Avançat** | **4** | **14 repeticions** | 60 segons | Alt volum i intensitat per a desenvolupament actiu. |
| **Dona, 30 anys, Intermedi** | **3** | **13 repeticions** | 50 segons | Repeticions base adaptades a la resistència metabòlica femenina; recuperació més curta. |
| **Home, 68 anys, Principiant** | **3** | **8 repeticions** | 72 segons | Volum reduït i descans ampliat (+20%) per protegir espatlles i colzes en edat avançada. |
| **Dona, 78 anys, Intermedi** | **2** (capat) | **9 repeticions** | 60 segons | Sèries reduïdes a 2 per fatiga, repeticions ajustades per edat ($12 \times 1.0 \times 0.70 = 8.4 \approx 8 + 1 \text{ per sexe} = 9$). |

---

## 4. Full de Ruta per a la Implementació a Kora360

Per portar aquesta proposta al codi, els passos tècnics a [app.js](file:///c:/Users/jlmog/Documents/Projectes%20Antigravity/kora360/app.js) serien:

1. **Actualitzar l'objecte de multiplicadors i valors de perfil** per llegir correctament l'edat (`profile.age`) i sexe (`profile.sex`) com a tipus numèrics i cadenes respectivament.
2. **Modificar la funció `getExecutionGoal`** per incorporar els coeficients articulars d'edat i de recuperació per sexe biològic.
3. **Adaptar el component visual de "Descans"** (`descans-01`) perquè el seu valor de durada s'estableixi dinàmicament en segons segons el perfil de l'usuari en lloc de ser sempre un valor fix de "60 s".
