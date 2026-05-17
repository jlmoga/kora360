/**
 * CATÀLEG D'EXERCICIS PER A LA WEB-APP DE GIMNÀSTICA
 * Lead Developer: Antigravity
 */

const CATALEG_EXERCICIS = [
    // --- CAMES ---
    {
        id: "cames-01",
        nom: "Esquat amb peses",
        imatge: "esquat-amb-peses",
        categoria: "Cames",
        complexitat: 3,
        equipament: "Peses (mancuernes)",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 12-15 repeticions",
        instruccions: "Dret, amb els peus a l'amplada de les espatlles i una pesa a cada mà lateralment. Baixa el maluc com si t'asseguessis en una cadira invisible, mantenint l'esquena recta i el pit obert. Els genolls no han de sobrepassar excessivament les puntes dels peus. Torna a la posició inicial empenyent des dels talons.",
        benefici_salut: "Enforteix el tren inferior (quadriceps, glutis i isquiotibials) i millora l'estabilitat del core i la mobilitat funcional.",
        translations: {
            ca: { nom: "Esquat amb peses", instruccions: "Dret, amb els peus a l'amplada de les espatlles i una pesa a cada mà lateralment. Baixa el maluc com si t'asseguessis en una cadira invisible, mantenint l'esquena recta i el pit obert. Els genolls no han de sobrepassar excessivament les puntes dels peus. Torna a la posició inicial empenyent des dels talons.", benefici: "Enforteix el tren inferior (quadriceps, glutis i isquiotibials) i millora l'estabilitat del core i la mobilitat funcional." },
            es: { nom: "Sentadilla con pesas", instruccions: "De pie, con los pies a la anchura de los hombros y una pesa en cada mano lateralmente. Baja la cadera como si te sentaras en una silla invisible, manteniendo la espalda recta y el pecho abierto. Las rodillas no deben sobrepasar excesivamente las puntas de los pies. Vuelve a la posición inicial empujando desde los talones.", benefici: "Fortalece el tren inferior (cuádriceps, glúteos e isquiotibiales) y mejora la estabilidad del core y la movilidad funcional." },
            en: { nom: "Weighted Squat", instruccions: "Stand with feet shoulder-width apart and a weight in each hand at your sides. Lower your hips as if sitting in an invisible chair, keeping your back straight and chest open. Knees should not excessively go beyond your toes. Return to the starting position by pushing through your heels.", benefici: "Strengthens the lower body (quads, glutes, and hamstrings) and improves core stability and functional mobility." }
        }
    },
    {
        id: "cames-02",
        nom: "Estocada búlgara (peu a banqueta)",
        imatge: "estocada-bulgara-peu-a-banqueta",
        categoria: "Cames",
        complexitat: 4,
        equipament: "Banqueta, peses (opcional)",
        materials: ["banqueta", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 10 repeticions per cama",
        instruccions: "Col·loca un peu darrere teu sobre la banqueta. Amb l'altra cama endavant, baixa le genoll posterior cap a terra mantenint el tors vertical. El genoll davanter ha de quedar alineat amb el turmell. Puja controladament.",
        benefici_salut: "Desenvolupa una gran força unilateral, millora l'equilibri i posa un èmfasi especial en el gluti major i el quàdriceps.",
        translations: {
            ca: { nom: "Estocada búlgara", instruccions: "Col·loca un peu darrere teu sobre la banqueta. Amb l'altra cama endavant, baixa le genoll posterior cap a terra mantenint el tors vertical. El genoll davanter ha de quedar alineat amb el turmell. Puja controladament.", benefici: "Desenvolupa una gran força unilateral, millora l'equilibri i posa un èmfasi especial en el gluti major i el quàdriceps." },
            es: { nom: "Zancada búlgara", instruccions: "Coloca un pie detrás de ti sobre el banco. Con la otra pierna adelante, baja la rodilla posterior hacia el suelo manteniendo el torso vertical. La rodilla delantera debe quedar alineada con el tobillo. Sube controladamente.", benefici: "Desarrolla una gran fuerza unilateral, mejora el equilibrio y pone un énfasis especial en el glúteo mayor y el cuádriceps." },
            en: { nom: "Bulgarian Split Squat", instruccions: "Place one foot behind you on the bench. With the other leg forward, lower your back knee toward the ground while keeping your torso upright. The front knee should stay aligned with the ankle. Rise in a controlled manner.", benefici: "Develops great unilateral strength, improves balance, and puts special emphasis on the gluteus maximus and quadriceps." }
        }
    },
    {
        id: "cames-03",
        nom: "Step-up (pujar a banqueta)",
        imatge: "step-up-pujar-a-banqueta",
        categoria: "Cames",
        complexitat: 2,
        equipament: "Banqueta, peses (opcional)",
        materials: ["banqueta", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 12 repeticions per cama",
        instruccions: "Col·loca un peu sencer sobre la banqueta. Empeny amb aquesta cama per elevar tot el cos fins a quedar dret sobre la banqueta. Baixa lentament per tornar a terra sense deixar caure el pes bruscament.",
        benefici_salut: "Millora la potència de les cames, la coordinació i és excel·lent per al treball cardiovascular de baixa intensitat combinat amb força.",
        translations: {
            ca: { nom: "Step-up (pujar a banqueta)", instruccions: "Col·loca un peu sobre la banqueta. Empeny amb aquesta cama per elevar tot el cos fins a quedar dret sobre la banqueta. Baixa lentament per tornar a terra sense deixar caure el pes bruscament.", benefici: "Millora la potència de les cames, la coordinació i és excel·lent per al treball cardiovascular de baixa intensitat combinat amb força." },
            es: { nom: "Step-up (subir a banco)", instruccions: "Coloca un pie sobre el banco. Empuja con esa pierna para elevar todo el cuerpo hasta quedar de pie sobre el banco. Baja lentamente para volver al suelo sin dejar caer el peso bruscamente.", benefici: "Mejora la potencia de las piernas, la coordinación y es excelente para el trabajo cardiovascular de baja intensidad combinado con fuerza." },
            en: { nom: "Step-up", instruccions: "Place one foot on the bench. Push with that leg to raise your entire body until you are standing on the bench. Lower slowly to return to the ground without dropping your weight abruptly.", benefici: "Improves leg power, coordination, and is excellent for low-intensity cardiovascular work combined with strength." }
        }
    },
    {
        id: "cames-04",
        nom: "Pont de gluti amb goma",
        imatge: "pont-de-gluti-amb-goma",
        categoria: "Cames",
        complexitat: 2,
        equipament: "Goma elàstica de resistència",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 20 repeticions",
        instruccions: "Estirat cap per amunt amb els genolls flexionats i la goma situada just per sobre dels genolls. Eleva el maluc cap al sostre contraient fortament els glutis i mantenint una lleugera tensió cap enfora contra la goma.",
        benefici_salut: "Aïllament eficaç del gluti i activació dels abductors, essencial per a la salut lumbar i l'estabilitat de la pelvis.",
        translations: {
            ca: { nom: "Pont de gluti amb goma", instruccions: "Estirat cap per amunt amb els genolls flexionats i la goma situada just per sobre dels genolls. Eleva el maluc cap al sostre contraient fortament els glutis i mantenint una lleugera tensió cap enfora contra la goma.", benefici: "Aïllament eficaç del gluti i activació dels abductors, essencial per a la salut lumbar i l'estabilitat de la pelvis." },
            es: { nom: "Puente de glúteo con goma", instruccions: "Tumbado boca arriba con las rodillas flexionadas y la goma situada justo por encima de las rodillas. Eleva la cadera hacia el techo contrayendo fuertemente los glúteos y manteniendo una ligera tensión hacia afuera contra la goma.", benefici: "Aislamiento eficaz del glúteo y activación de los abductores, esencial para la salud lumbar y la estabilidad de la pelvis." },
            en: { nom: "Banded Glute Bridge", instruccions: "Lie on your back with your knees bent and the band placed just above your knees. Raise your hips toward the ceiling by strongly contracting your glutes and maintaining slight outward tension against the band.", benefici: "Effective glute isolation and abductor activation, essential for lumbar health and pelvic stability." }
        }
    },
    {
        id: "cames-05",
        nom: "Pes mort amb peses",
        imatge: "pes-mort-amb-peses",
        categoria: "Cames",
        complexitat: 3,
        equipament: "Peses (mancuernes)",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 10-12 repeticions",
        instruccions: "Sostén les peses davant de les cuixes. Flexiona lleugerament els genolls i inclina el tors endavant des del maluc, lliscant les peses per sota dels genolls mentre mantens l'esquena totalment plana. Torna a dalt contraient els isquiotibials i glutis.",
        benefici_salut: "Exercici fonamental per a la cadena posterior (esquena baixa, glutis i isquios), millorant la postura i la força funcional.",
        translations: {
            ca: { nom: "Pes mort amb peses", instruccions: "Sostén les peses davant de les cuixes. Flexiona lleugerament els genolls i inclina el tors endavant des del maluc, lliscant les peses per sota dels genolls mentre mantens l'esquena totalment plana. Torna a dalt contraient els isquiotibials i glutis.", benefici: "Exercici fonamental per a la cadena posterior (esquena baixa, glutis i isquios), millorant la postura i la força funcional." },
            es: { nom: "Peso muerto con pesas", instruccions: "Sujeta las pesas frente a los muslos. Flexiona ligeramente las rodillas e inclina el torso hacia adelante desde la cadera, deslizando las pesas por debajo de las rodillas mientras mantienes la espalda totalmente plana. Vuelve arriba contrayendo los isquiotibiales y glúteos.", benefici: "Ejercicio fundamental para la cadena posterior (espalda baja, glúteos e isquios), mejorando la postura y la fuerza funcional." },
            en: { nom: "Dumbbell Deadlift", instruccions: "Hold the weights in front of your thighs. Slightly bend your knees and hinge your torso forward from the hips, sliding the weights below your knees while keeping your back completely flat. Return to the top by contracting your hamstrings and glutes.", benefici: "Fundamental exercise for the posterior chain (lower back, glutes, and hamstrings), improving posture and functional strength." }
        }
    },
    {
        id: "cames-06",
        nom: "Caminada lateral amb goma",
        imatge: "caminada-lateral-amb-goma",
        categoria: "Cames",
        complexitat: 2,
        equipament: "Goma elàstica (mini-band)",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 15 passes per costat",
        instruccions: "Col·loca la goma al voltant dels turmells o per sobre dels genolls. En posició de mig esquat, fes passes laterals curtes mantenint sempre la tensió a la goma i els peus paral·lels.",
        benefici_salut: "Activa intensament el gluti mitjà, crucial per prevenir lesions de genoll i millorar l'estabilitat lateral.",
        translations: {
            ca: { nom: "Caminada lateral amb goma", instruccions: "Col·loca la goma al voltant dels turmells o per sobre dels genolls. En posició de mig esquat, fes passes laterals curtes mantenint sempre la tensió a la goma i els peus paral·lels.", benefici: "Activa intensament el gluti mitjà, crucial per prevenir lesions de genoll i millorar l'estabilitat lateral." },
            es: { nom: "Caminata lateral con goma", instruccions: "Coloca la goma alrededor de los tobillos o por encima de las rodillas. En posición de media sentadilla, da pasos laterales cortos manteniendo siempre la tensión en la goma y los pies paralelos.", benefici: "Activa intensamente el glúteo medio, crucial para prevenir lesiones de rodilla y mejorar la estabilidad lateral." },
            en: { nom: "Banded Lateral Walk", instruccions: "Place the band around your ankles or above your knees. In a half-squat position, take short lateral steps always maintaining tension on the band and keeping your feet parallel.", benefici: "Intensely activates the gluteus medius, crucial for preventing knee injuries and improving lateral stability." }
        }
    },
    {
        id: "cames-07",
        nom: "Elevació de talons (assegut amb peses)",
        imatge: "elevacio-de-talons-assegut-amb-peses",
        categoria: "Cames",
        complexitat: 2,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 15-20 repeticions",
        instruccions: "Assegut a la banqueta amb els peus a terra i les peses sobre els genolls. Eleva els talons al màxim possible, contraient el soli, i baixa lentament fins a sentir un lleuger estirament.",
        benefici_salut: "Enforteix la musculatura del panxell (bessons i soli), millorant la circulació i l'estabilitat del turmell.",
        translations: {
            ca: { nom: "Elevació de talons", instruccions: "Assegut a la banqueta amb els peus a terra i les peses sobre els genolls. Eleva els talons al màxim possible, contraient el soli, i baixa lentament fins a sentir un lleuger estirament.", benefici: "Enforteix la musculatura del panxell (bessons i soli), millorant la circulació i l'estabilitat del turmell." },
            es: { nom: "Elevación de talones", instruccions: "Sentado en el banco con los pies en el suelo y las pesas sobre las rodillas. Eleva los talones lo máximo posible, contrayendo el sóleo, y baja lentamente hasta sentir un ligero estiramiento.", benefici: "Fortalece la musculatura de la pantorrilla (gemelos y sóleo), mejorando la circulación y la estabilidad del tobillo." },
            en: { nom: "Seated Calf Raise", instruccions: "Seated on the bench with feet on the floor and weights on your knees. Raise your heels as high as possible, contracting the soleus, and lower slowly until you feel a slight stretch.", benefici: "Strengthens the calf muscles (gastrocnemius and soleus), improving circulation and ankle stability." }
        }
    },
    {
        id: "cames-08",
        nom: "Esquat isomètric a la paret",
        imatge: "esquat-isometric-a-la-paret",
        categoria: "Cames",
        complexitat: 1,
        equipament: "Paret",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 45-60 segons",
        instruccions: "Recolza l'esquena contra la paret i baixa fins que les cuixes estiguin paral·leles a terra (angle de 90º). Mantén la posició estàtica, pressionant els talons contra el terra i l'esquena contra la paret.",
        benefici_salut: "Desenvolupa la resistència muscular als quàdriceps sense impacte articular, ideal per a la rehabilitació i l'estabilitat estructural.",
        translations: {
            ca: { nom: "Esquat isomètric a la paret", instruccions: "Recolza l'esquena contra la paret i baixa fins que les cuixes estiguin paral·leles a terra (angle de 90º). Mantén la posició estàtica, pressionant els talons contra el terra i l'esquena contra la paret.", benefici: "Desenvolupa la resistència muscular als quàdriceps sense impacte articular, ideal per a la rehabilitació i l'estabilitat estructural." },
            es: { nom: "Sentadilla isométrica en pared", instruccions: "Apoya la espalda contra la pared y baja hasta que los muslos estén paralelos al suelo (ángulo de 90º). Mantén la posición estática, presionando los talones contra el suelo y la espalda contra la pared.", benefici: "Desarrolla la resistencia muscular en los cuádriceps sin impacto articular, ideal para la rehabilitación y la estabilidad estructural." },
            en: { nom: "Wall Sit", instruccions: "Lean your back against the wall and lower until your thighs are parallel to the floor (90º angle). Hold the static position, pressing your heels into the floor and your back against the wall.", benefici: "Develops muscular endurance in the quadriceps without joint impact, ideal for rehabilitation and structural stability." }
        }
    },
    {
        id: "cames-09",
        nom: "Isquios amb pilota",
        imatge: "isquios-amb-pilota",
        categoria: "Cames",
        complexitat: 4,
        equipament: "Pilota suïssa (Fitball)",
        materials: ["pilota"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "Estirat d'esquena amb els talons sobre la pilota. Eleva el maluc i estira la pilota cap a tu flexionant els genolls, després torna a estirar les cames sense baixar el maluc.",
        benefici_salut: "Treball d'estabilitat i enfortiment de la cadena posterior molt intens.",
        translations: {
            ca: { nom: "Isquios amb pilota", instruccions: "Estirat d'esquena amb els talons sobre la pilota. Eleva el maluc i estira la pilota cap a tu flexionant els genolls, després torna a estirar les cames sense baixar el maluc.", benefici: "Treball d'estabilitat i enfortiment de la cadena posterior molt intens." },
            es: { nom: "Isquios con pelota", instruccions: "Tumbado boca arriba con los talones sobre la pelota. Eleva la cadera y tira de la pelota hacia ti flexionando las rodillas, después vuelve a estirar las piernas sin bajar la cadera.", benefici: "Trabajo de estabilidad y fortalecimiento de la cadena posterior muy intenso." },
            en: { nom: "Stability Ball Hamstring Curl", instruccions: "Lie on your back with your heels on the ball. Raise your hips and pull the ball toward you by bending your knees, then extend your legs again without lowering your hips.", benefici: "Very intense stability and strengthening work for the posterior chain." }
        }
    },
    {
        id: "cames-10",
        nom: "Isquios a una cama",
        imatge: "isquios-a-una-cama",
        categoria: "Cames",
        complexitat: 3,
        equipament: "Pes corporal",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 10 repeticions per cama",
        instruccions: "Dret, amb una cama recolzada en una banqueta o cadira. Flexiona el tors endavant sense arquejar l'esquena fins a sentir l'estirament als isquios, i torna a la posició inicial.",
        benefici_salut: "Millora l'estabilitat unilateral i la flexibilitat activa de la part posterior de la cuixa.",
        translations: {
            ca: { nom: "Isquios a una cama", instruccions: "Dret, amb una cama recolzada en una banqueta o cadira. Flexiona el tors endavant sense arquejar l'esquena fins a sentir l'estirament als isquios, i torna a la posició inicial.", benefici: "Millora l'estabilitat unilateral i la flexibilitat activa de la part posterior de la cuixa." },
            es: { nom: "Isquios a una pierna", instruccions: "De pie, con una pierna apoyada en un banco o silla. Flexiona el torso hacia adelante sin arquear la espalda hasta sentir el estiramiento en los isquios, y vuelve a la posición inicial.", benefici: "Mejora la estabilidad unilateral y la flexibilidad activa de la parte posterior del muslo." },
            en: { nom: "Single-leg Hamstring Stretch", instruccions: "Standing, with one leg supported on a bench or chair. Hinge your torso forward without arching your back until you feel the stretch in your hamstrings, and return to the starting position.", benefici: "Improves unilateral stability and active flexibility of the back of the thigh." }
        }
    },
    {
        id: "cames-11",
        nom: "Esquat isomètric a la paret amb pilota",
        imatge: "esquat-isometric-a-la-paret-amb-pilota",
        categoria: "Cames",
        complexitat: 2,
        equipament: "Pilota suïssa (Fitball), Paret",
        materials: ["pilota", "pes_corporal"],
        repeticions_suggerides: "3 sèries aguantant entre 30 i 60 segons",
        instruccions: "Col·loca la pilota entre la teva zona lumbar i la paret. Amb els peus separats a l'amplada de les espatlles, baixa el cos lliscant sobre la pilota fins que els genolls formin un angle de 90 graus. Manté la posició.",
        benefici_salut: "Molt segur per a la gent amb dolors d'esquena, ja que la pilota guia el moviment i protegeix la curvatura lumbar mentre es genera una gran resistència muscular a les cuixes.",
        translations: {
            ca: { nom: "Esquat isomètric amb pilota", instruccions: "Col·loca la pilota entre la teva zona lumbar i la paret. Amb els peus separats a l'amplada de les espatlles, baixa el cos lliscant sobre la pilota fins que els genolls formin un angle de 90 graus. Manté la posició.", benefici: "Molt segur per a la gent amb dolors d'esquena, ja que la pilota guia el moviment i protegeix la curvatura lumbar mentre es genera una gran resistència muscular a les cuixes." },
            es: { nom: "Sentadilla isométrica con pelota", instruccions: "Coloca la pelota entre tu zona lumbar y la pared. Con los pies separados a la anchura de los hombros, baja el cuerpo deslizando sobre la pelota hasta que las rodillas formen un ángulo de 90 grados. Mantén la posición.", benefici: "Muy seguro para la gente con dolores de espalda, ya que la pelota guía el movimiento y protege la curvatura lumbar mientras se genera una gran resistencia muscular en los muslos." },
            en: { nom: "Stability Ball Wall Sit", instruccions: "Place the ball between your lower back and the wall. With feet shoulder-width apart, lower your body sliding on the ball until your knees form a 90-degree angle. Hold the position.", benefici: "Very safe for people with back pain, as the ball guides the movement and protects the lumbar curve while generating great muscular endurance in the thighs." }
        }
    },
    {
        id: "cames-12",
        nom: "Estocada lliscant posterior (Reverse Lunge)",
        imatge: "estocada-lliscant-posterior-reverse-lunge",
        categoria: "Cames",
        complexitat: 3,
        equipament: "Màquina de rem",
        materials: ["rem", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 12 repeticions per cama",
        instruccions: "Posa't dempeus al costat de la màquina, mirant cap endavant. Posa un peu a terra i l'altre sobre el seient. Fes lliscar el seient cap enrere mentre flexiones la cama de terra, baixant el maluc. La resistència de la màquina (si agafes el mànec amb una mà) pot ajudar-te a estabilitzar-te.",
        benefici_salut: "Treballa l'estabilitat del genoll en un pla dinàmic. Perfecte per simular el lliscament controlat en tarteres o terrenys tous.",
        translations: {
            ca: { nom: "Estocada lliscant posterior", instruccions: "Posa't dempeus al costat de la màquina, mirant cap endavant. Posa un peu a terra i l'altre sobre el seient. Fes lliscar el seient cap enrere mentre flexiones la cama de terra, baixant el maluc. La resistència de la màquina pot ajudar-te a estabilitzar-te.", benefici: "Treballa l'estabilitat del genoll en un pla dinàmic. Perfecte per simular el lliscament controlat en tarteres o terrenys tous." },
            es: { nom: "Zancada deslizante posterior", instruccions: "Ponte de pie junto a la máquina, mirando hacia adelante. Pon un pie en el suelo y el otro sobre el asiento. Desliza el asiento hacia atrás mientras flexionas la pierna de apoyo, bajando la cadera. La resistencia de la máquina puede ayudarte a estabilizarte.", benefici: "Trabaja la estabilidad de la rodilla en un plano dinámico. Perfecto para simular el deslizamiento controlado en pedreras o terrenos blandos." },
            en: { nom: "Sliding Reverse Lunge", instruccions: "Stand next to the machine, facing forward. Place one foot on the ground and the other on the seat. Slide the seat back while bending the supporting leg, lowering your hips. The machine's resistance can help stabilize you.", benefici: "Works knee stability in a dynamic plane. Perfect for simulating controlled sliding on scree or soft terrain." }
        }
    },
    {
        id: "cames-13",
        nom: "Elevació de Tibials (Tibialis Raise)",
        imatge: "elevacio-de-tibials-tibialis-raise",
        categoria: "Cames",
        complexitat: 2,
        equipament: "Una paret",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 20 repeticions (fins a notar la cremor)",
        instruccions: "Recolza l'esquena a la paret i avança els peus uns 30-40 cm. Amb les cames rectes, eleva les puntes dels peus cap amunt tant com puguis, aguantant un segon a dalt, i baixa lentament.",
        benefici_salut: "Enforteix el tibial anterior. És el 'fre de mà' del cos. Si aquest múscul és fort, els teus genolls no patiran en el descens. Prevé la periostitis tibial.",
        translations: {
            ca: { nom: "Elevació de Tibials", instruccions: "Recolza l'esquena a la paret i avança els peus uns 30-40 cm. Amb les cames rectes, eleva les puntes dels peus cap amunt tant com puguis, aguantant un segon a dalt, i baixa lentament.", benefici: "Enforteix el tibial anterior. És el 'fre de mà' del cos. Si aquest múscul és fort, els teus genolls no patiran en el descens. Prevé la periostitis tibial." },
            es: { nom: "Elevación de Tibiales", instruccions: "Apoya la espalda en la pared y avanza los pies unos 30-40 cm. Con las piernas rectas, eleva las puntas de los pies hacia arriba tanto como puedas, aguantando un segundo arriba, y baja lentamente.", benefici: "Fortalece el tibial anterior. Es el 'freno de mano' del cuerpo. Si este músculo es fuerte, tus rodillas no sufrirán en el descenso. Previene la periostitis tibial." },
            en: { nom: "Tibialis Raise", instruccions: "Lean your back against a wall and move your feet forward about 30-40 cm. With straight legs, raise your toes as high as possible, hold for one second, and lower slowly.", benefici: "Strengthens the tibialis anterior. It is the body's 'handbrake'. If this muscle is strong, your knees won't suffer during descents. Prevents shin splints." }
        }
    },
    {
        id: "cames-14",
        nom: "Estocada caminant amb pes",
        imatge: "estocada-caminant-amb-pes",
        categoria: "Cames",
        complexitat: 3,
        equipament: "Dues peses (mancuernes)",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 10-12 passos (5-6 per cama)",
        instruccions: "Comença dempeus subjectant una pesa a cada mà amb els braços estesos als costats, tot seguit fes un pas llarg cap endavant i flexiona ambdós genolls fins que el de darrere gairebé toqui terra, assegurant-te que el genoll de davant quedi a 90 graus i no sobrepassi la punta del peu, abans d'impulsar-te amb la cama de davant per tornar a la posició vertical mentre avances la cama de darrere per realitzar la següent estocada en un moviment continu.",
        benefici_salut: "Desenvolupa una força concèntrica i excèntrica brutal, essencial per a les pujades amb molta inclinació i per controlar el descens. Millora la mobilitat del maluc.",
        translations: {
            ca: { nom: "Estocada caminant amb pes", instruccions: "Fes un pas llarg endavant i flexiona ambdós genolls fins que el de darrere gairebé toqui terra. Impulsa't per avançar la cama posterior i continua el moviment.", benefici: "Desenvolupa una força concèntrica i excèntrica brutal, essencial per a les pujades amb molta inclinació i per controlar el descens." },
            es: { nom: "Zancada caminando con peso", instruccions: "Da un paso largo hacia adelante y flexiona ambas rodillas hasta que la de atrás casi toque el suelo. Impúlsate para avanzar la pierna posterior y continúa el movimiento.", benefici: "Desarrolla una fuerza concéntrica y excéntrica brutal, esencial para las subidas con mucha inclinación y para controlar el descenso." },
            en: { nom: "Walking Lunges with Weights", instruccions: "Take a long step forward and bend both knees until the back one almost touches the ground. Push off to advance the back leg and continue the movement.", benefici: "Develops brutal concentric and eccentric strength, essential for steep climbs and controlling descents." }
        }
    },
    // --- EMPENTA (PIT/ESPATLLES/TRÍCEPS) ---
    {
        id: "empenta-01",
        nom: "Press de banca amb peses",
        imatge: "press-de-banca-amb-peses",
        categoria: "Empenta",
        complexitat: 3,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 10-12 repeticions",
        instruccions: "Estirat d'esquena a la banqueta. Empeny les peses cap amunt des del pit fins a estendre els braços, sense bloquejar els colzes. Baixa controladament fins que les peses arribin a l'altura del pit.",
        benefici_salut: "Treball integral del pectoral major, deltoides anterior i tríceps, fonamental per a la força d'empenta horitzontal.",
        translations: {
            ca: { nom: "Press de banca amb peses", instruccions: "Estirat d'esquena a la banqueta. Empeny les peses cap amunt des del pit fins a estendre els braços, sense bloquejar els colzes. Baixa controladament fins que les peses arribin a l'altura del pit.", benefici: "Treball integral del pectoral major, deltoides anterior i tríceps, fonamental per a la força d'empenta horitzontal." },
            es: { nom: "Press de banca con pesas", instruccions: "Tumbado boca arriba en el banco. Empuja las pesas hacia arriba desde el pecho hasta extender los brazos, sin bloquear los codos. Baja controladamente hasta que las pesas lleguen a la altura del pecho.", benefici: "Trabajo integral del pectoral mayor, deltoides anterior y tríceps, fundamental para la fuerza de empuje horizontal." },
            en: { nom: "Dumbbell Bench Press", instruccions: "Lie on your back on the bench. Push the weights up from your chest until your arms are extended, without locking your elbows. Lower in a controlled manner until the weights reach chest height.", benefici: "Comprehensive work of the pectoralis major, anterior deltoid, and triceps, fundamental for horizontal pushing strength." }
        }
    },
    {
        id: "empenta-02",
        nom: "Obertures de pit a la banqueta",
        imatge: "obertures-de-pit-a-la-banqueta",
        categoria: "Empenta",
        complexitat: 3,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 12-15 repeticions",
        instruccions: "Estirat a la banqueta amb les peses sobre el pit. Obre els braços lateralment amb una lleugera flexió de colzes (com si abraçessis un arbre) fins a sentir l'estirament al pectoral. Torna a la posició inicial usant la força del pit.",
        benefici_salut: "Millora la flexibilitat pectoral i aïlla el múscul per a un desenvolupament més harmònic.",
        translations: {
            ca: { nom: "Obertures de pit a la banqueta", instruccions: "Estirat a la banqueta amb les peses sobre el pit. Obre els braços lateralment amb una lleugera flexió de colzes fins a sentir l'estirament al pectoral. Torna a la posició inicial usant la força del pit.", benefici: "Millora la flexibilitat pectoral i aïlla el múscul per a un desenvolupament més harmònic." },
            es: { nom: "Aperturas de pecho en banco", instruccions: "Tumbado en el banco con las pesas sobre el pecho. Abre los brazos lateralmente con una ligera flexión de codos hasta sentir el estiramiento en el pectoral. Vuelve a la posición inicial usando la fuerza del pecho.", benefici: "Mejora la flexibilidad pectoral y aísla el músculo para un desarrollo más armónico." },
            en: { nom: "Dumbbell Chest Fly", instruccions: "Lie on the bench with the weights over your chest. Open your arms laterally with a slight bend in your elbows until you feel the stretch in your pecs. Return to the starting position using chest strength.", benefici: "Improves pectoral flexibility and isolates the muscle for a more harmonious development." }
        }
    },
    {
        id: "empenta-03",
        nom: "Flexions inclinades (mans a banqueta)",
        imatge: "flexions-inclinades-mans-a-banqueta",
        categoria: "Empenta",
        complexitat: 2,
        equipament: "Banqueta",
        materials: ["banqueta", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 12-15 repeticions",
        instruccions: "Col·loca les mans a la banqueta i els peus a terra, formant una línia recta amb el cos. Baixa el pit cap a la banqueta i empeny amb força per tornar a dalt. Mantén el core activat en tot moment.",
        benefici_salut: "Versió pedagògica de les flexions que posa èmfasi en la part inferior del pectoral i facilita l'aprenentatge de la tècnica correcta.",
        translations: {
            ca: { nom: "Flexions inclinades (mans a banqueta)", instruccions: "Col·loca les mans a la banqueta i els peus a terra, formant una línia recta amb el cos. Baixa el pit cap a la banqueta i empeny amb força per tornar a dalt. Mantén el core activat en tot moment.", benefici: "Versió pedagògica de les flexions que posa èmfasi en la part inferior del pectoral i facilita l'aprenentatge de la tècnica correcta." },
            es: { nom: "Flexiones inclinadas (manos en banco)", instruccions: "Coloca las manos en el banco y los pies en el suelo, formando una línea recta con el cuerpo. Baja el pecho hacia el banco y empuja con fuerza para volver arriba. Mantén el core activado en todo momento.", benefici: "Versión pedagógica de las flexiones que pone énfasis en la parte inferior del pectoral y facilita el aprendizaje de la técnica correcta." },
            en: { nom: "Incline Push-ups (hands on bench)", instruccions: "Place your hands on the bench and feet on the ground, forming a straight line with your body. Lower your chest to the bench and push up powerfully. Keep your core engaged at all times.", benefici: "Pedagogical version of push-ups that emphasizes the lower pectoral and facilitates learning correct technique." }
        }
    },
    {
        id: "empenta-04",
        nom: "Press militar assegut",
        imatge: "press-militar-assegut",
        categoria: "Empenta",
        complexitat: 3,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 10 repeticions",
        instruccions: "Assegut a la banqueta, amb una pesa a cada mà a l'alçada de les espatlles. Estén els braços cap al sostre sense bloquejar els colzes completament i baixa lentament.",
        benefici_salut: "Enforteix els deltoides i millora l'estabilitat escapular i la postura de l'esquena superior.",
        translations: {
            ca: { nom: "Press militar", instruccions: "Assegut a la banqueta, amb una pesa a cada mà a l'alçada de les espatlles. Estén els braços cap al sostre sense bloquejar els colzes completament i baixa lentament.", benefici: "Enforteix els deltoides i millora l'estabilitat escapular i la postura de l'esquena superior." },
            es: { nom: "Press militar", instruccions: "Sentado en el banco, con una pesa en cada mano a la altura de los hombros. Extiende los brazos hacia el techo sin bloquear los codos completamente y baja lentamente.", benefici: "Fortalece los deltoides y mejora la estabilidad escapular y la postura de la espalda superior." },
            en: { nom: "Military Press", instruccions: "Seated on the bench, with a weight in each hand at shoulder height. Extend your arms toward the ceiling without fully locking your elbows and lower slowly.", benefici: "Strengthens the deltoids and improves scapular stability and upper back posture." }
        }
    },
    {
        id: "empenta-05",
        nom: "Elevacions laterals amb gomes o peses",
        imatge: "elevacions-laterals-amb-gomes-o-peses",
        categoria: "Empenta",
        complexitat: 2,
        equipament: "Gomes o Peses",
        materials: ["gomes", "peses"],
        repeticions_suggerides: "3 sèries de 15 repeticions",
        instruccions: "Dret, eleva els braços lateralment fins que estiguin paral·lels a terra, mantenint una mínima flexió de colzes. Baixa lentament. Si uses gomes, trepitja-les amb els peus per crear resistència.",
        benefici_salut: "Aïllament del deltoides lateral, essencial per a l'amplitud de les espatlles i la postura vertical.",
        translations: {
            ca: { nom: "Elevacions laterals amb gomes o peses", instruccions: "Dret, eleva els braços lateralment fins que estiguin paral·lels a terra, mantenint una mínima flexió de colzes. Baixa lentament. Si uses gomes, trepitja-les amb els peus per crear resistència.", benefici: "Aïllament del deltoides lateral, essencial per a l'amplitud de les espatlles i la postura vertical." },
            es: { nom: "Elevaciones laterales con gomas o pesas", instruccions: "De pie, eleva los brazos lateralmente hasta que estén paralelos al suelo, manteniendo una mínima flexión de codos. Baja lentamente. Si usas gomas, písalas con los pies para crear resistencia.", benefici: "Aislamiento del deltoides lateral, esencial para la amplitud de los hombros y la postura vertical." },
            en: { nom: "Lateral Raises with bands or weights", instruccions: "Standing, raise your arms laterally until they are parallel to the floor, maintaining a slight bend in the elbows. Lower slowly. If using bands, step on them to create resistance.", benefici: "Isolation of the lateral deltoid, essential for shoulder width and vertical posture." }
        }
    },
    {
        id: "empenta-06",
        nom: "Fons de tríceps a la banqueta",
        imatge: "fons-de-triceps-a-la-banqueta",
        categoria: "Empenta",
        complexitat: 3,
        equipament: "Banqueta",
        materials: ["banqueta", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "D'esquena a la banqueta, recolza les mans a la vora. Amb les cames esteses (o flexionades per facilitar), baixa el cos flexionant els colzes cap enrere i puja fent força exclusivament amb els tríceps.",
        benefici_salut: "Exercici de pes corporal d'alta eficàcia per al desenvolupament de la part posterior del braç i la força de les articulacions del colze.",
        translations: {
            ca: { nom: "Fons de tríceps a la banqueta", instruccions: "D'esquena a la banqueta, recolza les mans a la vora. Amb les cames esteses o flexionades, baixa el cos flexionant els colzes cap enrere i puja fent força exclusivament amb els tríceps.", benefici: "Exercici de pes corporal d'alta eficàcia per al desenvolupament de la part posterior del braç i la força de les articulacions del colze." },
            es: { nom: "Fondos de tríceps en banco", instruccions: "De espaldas al banco, apoya las manos en el borde. Con las piernas extendidas o flexionadas, baja el cuerpo flexionando los codos hacia atrás y sube haciendo fuerza exclusivamente con los tríceps.", benefici: "Ejercicio de peso corporal de alta eficacia para el desarrollo de la parte posterior del brazo y la fuerza de las articulaciones del codo." },
            en: { nom: "Bench Triceps Dips", instruccions: "With your back to the bench, place your hands on the edge. With your legs extended or bent, lower your body by bending your elbows back and push up using exclusively your triceps.", benefici: "Highly effective bodyweight exercise for developing the back of the arm and elbow joint strength." }
        }
    },
    {
        id: "empenta-07",
        nom: "Press francès amb peses",
        imatge: "press-frances-amb-peses",
        categoria: "Empenta",
        complexitat: 3,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "Estirat a la banqueta. Estén els braços amb les peses cap al sostre. Flexiona només els colzes portant les peses cap a les teves temples (el braç des de l'espatlla al colze no s'ha de moure). Torna a estendre.",
        benefici_salut: "Aïlla el tríceps en la seva totalitat, especialment la porció llarga, millorant la definició i la força braquial.",
        translations: {
            ca: { nom: "Press francès amb peses", instruccions: "Estirat a la banqueta. Estén els braços amb les peses cap al sostre. Flexiona només els colzes portant les peses cap a les teves temples. Torna a estendre.", benefici: "Aïlla el tríceps en la seva totalitat, especialment la porció llarga, millorant la definició i la força braquial." },
            es: { nom: "Press francés con pesas", instruccions: "Tumbado en el banco. Extiende los brazos con las pesas hacia el techo. Flexiona solo los codos llevando las pesas hacia tus sienes. Vuelve a extender.", benefici: "Aísla el tríceps en su totalidad, especialmente la porción larga, mejorando la definición y la fuerza braquial." },
            en: { nom: "Dumbbell Skullcrushers", instruccions: "Lie on the bench. Extend your arms with the weights toward the ceiling. Bend only your elbows bringing the weights toward your temples. Extend again.", benefici: "Isolates the triceps entirely, especially the long head, improving arm definition and strength." }
        }
    },
    {
        id: "empenta-08",
        nom: "Flexions amb goma a l'esquena",
        imatge: "flexions-amb-goma-a-l-esquena",
        categoria: "Empenta",
        complexitat: 4,
        equipament: "Goma elàstica",
        materials: ["gomes", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 8-12 repeticions",
        instruccions: "Passa la goma per dalt de la teva esquena i subjecta-la amb les mans mentre fas flexions a terra. La goma afegeix resistència en la part final de l'empenta, quan els braços s'estenen.",
        benefici_salut: "Afegeix una corba de resistència variable que augmenta la potència muscular i la intensitat sense necessitat de pes extra.",
        translations: {
            ca: { nom: "Flexions amb goma a l'esquena", instruccions: "Passa la goma per dalt de la teva esquena i subjecta-la amb les mans mentre fas flexions a terra. La goma afegeix resistència en la part final de l'empenta, quan els braços s'estenen.", benefici: "Afegeix una corba de resistència variable que augmenta la potència muscular i la intensitat sense necessitat de pes extra." },
            es: { nom: "Flexiones con goma en la espalda", instruccions: "Pasa la goma por encima de tu espalda y sujétala con las manos mientras haces flexiones en el suelo. La goma añade resistencia en la parte final del empuje, cuando los brazos se extienden.", benefici: "Añade una curva de resistencia variable que aumenta la potencia muscular y la intensidad sin necesidad de peso extra." },
            en: { nom: "Banded Push-ups", instruccions: "Place the band across your upper back and hold it with your hands while doing push-ups on the floor. The band adds resistance at the end of the push, when your arms extend.", benefici: "Adds a variable resistance curve that increases muscular power and intensity without the need for extra weight." }
        }
    },
    {
        id: "empenta-09",
        nom: "Flexions amb peus sobre pilota",
        imatge: "flexions-amb-peus-sobre-pilota",
        categoria: "Empenta",
        complexitat: 4,
        equipament: "Pilota suïssa (Fitball)",
        materials: ["pilota", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 8 a 12 repeticions",
        instruccions: "Col·loca les mans a terra (amplada d'espatlles) i els peus o les tibies sobre la pilota. Manté el cos en línia recta (com una taula) mentre baixes el pit cap a terra i tornes a pujar.",
        benefici_salut: "Augmenta la intensitat de la flexió tradicional en traslladar més pes al tren superior i obliga el core a treballar contínuament per no perdre l'equilibri.",
        translations: {
            ca: { nom: "Flexions amb peus sobre pilota", instruccions: "Col·loca les mans a terra (amplada d'espatlles) i els peus o les tibies sobre la pilota. Manté el cos en línia recta mentre baixes el pit cap a terra i tornes a pujar.", benefici: "Augmenta la intensitat de la flexió tradicional en traslladar més pes al tren superior i obliga el core a treballar contínuament per no perdre l'equilibri." },
            es: { nom: "Flexiones con pies sobre pelota", instruccions: "Coloca las manos en el suelo (anchura de hombros) y los pies o tibias sobre la pelota. Mantén el cuerpo en línea recta mientras bajas el pecho hacia el suelo y vuelves a subir.", benefici: "Aumenta la intensidad de la flexión tradicional al trasladar más peso al tren superior y obliga al core a trabajar continuamente para no perder el equilibrio." },
            en: { nom: "Stability Ball Decline Push-ups", instruccions: "Place your hands on the floor (shoulder-width) and your feet or shins on the ball. Keep your body in a straight line as you lower your chest to the floor and push back up.", benefici: "Increases the intensity of the traditional push-up by shifting more weight to the upper body and forces the core to work continuously to maintain balance." }
        }
    },

    // --- TRACCIÓ I CARDIO ---
    {
        id: "traccio-01",
        nom: "Màquina de rem",
        imatge: "maquina-de-rem",
        categoria: "Tracció",
        complexitat: 5,
        equipament: "Màquina de rem",
        materials: ["rem"],
        tipus: "comptatge",
        opcions_comptatge: [100, 200, 300, 500],
        repeticions_suggerides: "Objectiu: 250 remades a ritme constant",
        instruccions: "Empeny fort amb les cames primer, inclina el tors lleugerament enrere i acaba estirant el manillar cap al teu abdomen. Torna els braços, inclina el tors endavant i flexiona genolls per repetir.",
        benefici_salut: "Treball cardiovascular d'alt impacte metabòlic que implica el 85% dels músculs del cos, millorant la capacitat aeròbica i la resistència muscular.",
        translations: {
            ca: { nom: "Màquina de rem", instruccions: "Empeny fort amb les cames primer, inclina el tors lleugerament enrere i acaba estirant el manillar cap al teu abdomen. Torna els braços, inclina el tors endavant i flexiona genolls per repetir.", benefici: "Treball cardiovascular d'alt impacte metabòlic que implica el 85% dels músculs del cos, millorant la capacitat aeròbica i la resistència muscular." },
            es: { nom: "Máquina de remo", instruccions: "Empuja fuerte con las piernas primero, inclina el torso ligeramente hacia atrás y termina tirando del manillar hacia tu abdomen. Vuelve los brazos, inclina el torso hacia adelante y flexiona las rodillas para repetir.", benefici: "Trabajo cardiovascular de alto impacto metabólico que implica el 85% de los músculos del cuerpo, mejorando la capacidad aeróbica y la resistencia muscular." },
            en: { nom: "Rowing Machine", instruccions: "Push hard with your legs first, lean your torso slightly back and finish by pulling the handle towards your abdomen. Return your arms, lean your torso forward and bend your knees to repeat.", benefici: "High-metabolic impact cardiovascular workout that engages 85% of the body's muscles, improving aerobic capacity and muscular endurance." }
        }
    },
    {
        id: "traccio-02",
        nom: "Rem a una mà (recolzat a banqueta)",
        imatge: "rem-a-una-ma-recolzat-a-banqueta",
        categoria: "Tracció",
        complexitat: 3,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 12 repeticions per costat",
        instruccions: "Recolza un genoll i la mà del mateix costat a la banqueta. Amb l'altra mà, estira la pesa cap al maluc, mantenint l'esquena paral·lela a terra i evitant rotar el tors.",
        benefici_salut: "Enforteix el dorsal ample i els músculs de l'esquena mitjana, millorant la postura i corregint desequilibris musculars.",
        translations: {
            ca: { nom: "Rem a una mà", instruccions: "Recolza un genoll i la mà del mateix costat a la banqueta. Amb l'altra mà, estira la pesa cap al maluc, mantenint l'esquena paral·lela a terra i evitant rotar el tors.", benefici: "Enforteix el dorsal ample i els músculs de l'esquena mitjana, millorant la postura i corregint desequilibris musculars." },
            es: { nom: "Remo a una mano", instruccions: "Apoya una rodilla y la mano del mismo lado en el banco. Con la otra mano, tira de la pesa hacia la cadera, manteniendo la espalda paralela al suelo y evitando rotar el torso.", benefici: "Fortalece el dorsal ancho y los músculos de la espalda media, mejorando la postura y corrigiendo desequilibrios musculares." },
            en: { nom: "One-Arm Dumbbell Row", instruccions: "Support one knee and the hand on the same side on the bench. With the other hand, pull the weight toward your hip, keeping your back parallel to the floor and avoiding torso rotation.", benefici: "Strengthens the latissimus dorsi and middle back muscles, improving posture and correcting muscular imbalances." }
        }
    },
    {
        id: "traccio-03",
        nom: "Rem amb gomes (punt fix)",
        imatge: "rem-amb-gomes-punt-fix",
        categoria: "Tracció",
        complexitat: 2,
        equipament: "Goma elàstica, Punt fix",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 15-20 repeticions",
        instruccions: "Ancora la goma a un punt fix a l'alçada del pit. Dret, amb els genolls relaxats, estira els extrems de la goma cap a tu, portant els colzes enrere i ajuntant les escàpules.",
        benefici_salut: "Treball excel·lent per a la salut escapular i la retracció de les espatlles, ideal per a persones que passen molt temps assegudes.",
        translations: {
            ca: { nom: "Rem amb gomes (punt fix)", instruccions: "Ancora la goma a un punt fix a l'alçada del pit. Dret, amb els genolls relaxats, estira els extrems de la goma cap a tu, portant els colzes enrere i ajuntant les escàpules.", benefici: "Treball excel·lent per a la salut escapular i la retracció de les espatlles, ideal per a persones que passen molt temps assegudes." },
            es: { nom: "Remo con gomas (punto fijo)", instruccions: "Ancla la goma a un punto fijo a la altura del pecho. De pie, con las rodillas relajadas, tira de los extremos de la goma hacia ti, llevando los codos hacia atrás y juntando las escápulas.", benefici: "Trabajo excelente para la salud escapular y la retracción de los hombros, ideal para personas que pasan mucho tiempo sentadas." },
            en: { nom: "Banded Row", instruccions: "Anchor the band to a fixed point at chest height. Standing, with relaxed knees, pull the ends of the band toward you, bringing your elbows back and squeezing your shoulder blades together.", benefici: "Excellent work for scapular health and shoulder retraction, ideal for people who spend a lot of time sitting." }
        }
    },
    {
        id: "traccio-04",
        nom: "Curl de bíceps dempeus",
        imatge: "curl-de-biceps-dempeus",
        categoria: "Tracció",
        complexitat: 2,
        equipament: "Peses or Goma",
        materials: ["peses", "gomes"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "Dret, amb els braços estirats i un pes a cada mà. Flexiona els colzes portant els pesos cap a les espatlles sense moure els braços superiors ni balancejar el cos.",
        benefici_salut: "Desenvolupa la força del bíceps braquial i millora la capacitat de càrrega d'objectes en la vida quotidiana.",
        translations: {
            ca: { nom: "Curl de bíceps dempeus", instruccions: "Dret, amb els braços estirats i un pes a cada mà. Flexiona els colzes portant els pesos cap a les espatlles sense moure els braços superiors ni balancejar el cos.", benefici: "Desenvolupa la força del bíceps braquial i millora la capacitat de càrrega d'objectes en la vida quotidiana." },
            es: { nom: "Curl de bíceps de pie", instruccions: "De pie, con los brazos estirados y un peso en cada mano. Flexiona los codos llevando los pesos hacia los hombros sin mover la parte superior de los brazos ni balancear el cuerpo.", benefici: "Desarrolla la fuerza del bíceps braquial y mejora la capacidad de carga de objetos en la vida cotidiana." },
            en: { nom: "Standing Bicep Curls", instruccions: "Standing, with your arms extended and a weight in each hand. Bend your elbows bringing the weights toward your shoulders without moving your upper arms or swinging your body.", benefici: "Develops the strength of the biceps brachii and improves the capacity to carry objects in daily life." }
        }
    },
    {
        id: "traccio-05",
        nom: "Curl de bíceps concentrat",
        imatge: "curl-de-biceps-concentrat",
        categoria: "Tracció",
        complexitat: 3,
        equipament: "Banqueta, Peses",
        materials: ["banqueta", "peses"],
        repeticions_suggerides: "3 sèries de 12 repeticions per braç",
        instruccions: "Assegut a la banqueta, recolza el colze a la cara interna de la cuixa del mateix costat. Realitza el curl sense permetre que el braç es desplaci. El focus és l'aïllament total.",
        benefici_salut: "Elimina qualsevol possibilitat de 'trampa' amb el cos, maximitzant el creixement i la força del pic del bíceps.",
        translations: {
            ca: { nom: "Curl de bíceps concentrat", instruccions: "Assegut a la banqueta, recolza el colze a la cara interna de la cuixa del mateix costat. Realitza el curl sense permetre que el braç es desplaci. El focus és l'aïllament total.", benefici: "Elimina qualsevol possibilitat de 'trampa' amb el cos, maximitzant el creixement i la força del pic del bíceps." },
            es: { nom: "Curl de bíceps concentrado", instruccions: "Sentado en el banco, apoya el codo en la cara interna del muslo del mismo lado. Realiza el curl sin permitir que el brazo se desplace. El foco es el aislamiento total.", benefici: "Elimina cualquier posibilidad de 'trampa' con el cuerpo, maximizando el crecimiento y la fuerza del pico del bíceps." },
            en: { nom: "Concentration Curls", instruccions: "Seated on the bench, rest your elbow on the inner thigh of the same side. Perform the curl without allowing the arm to move. The focus is total isolation.", benefici: "Eliminates any possibility of 'cheating' with the body, maximizing the growth and strength of the bicep peak." }
        }
    },
    {
        id: "traccio-06",
        nom: "Face-pull amb gomes",
        imatge: "face-pull-amb-gomes",
        categoria: "Tracció",
        complexitat: 4,
        equipament: "Goma elàstica, Punt fix",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 15 repeticions",
        instruccions: "Amb la goma ancorada alta, estira els extrems cap al teu front, obrint els colzes cap als costats i rotant externament els braços (com fent 'doble bíceps').",
        benefici_salut: "Exercici estrella per a la salut de les espatlles i la postura, treballant el deltoides posterior i els rotatoris.",
        translations: {
            ca: { nom: "Face-pull amb gomes", instruccions: "Amb la goma ancorada alta, estira els extrems cap al teu front, obrint els colzes cap als costats i rotant externament els braços (com fent 'doble bíceps').", benefici: "Exercici estrella per a la salut de les espatlles i la postura, treballant el deltoides posterior i els rotatoris." },
            es: { nom: "Face-pull con gomas", instruccions: "Con la goma anclada alta, tira de los extremos hacia tu frente, abriendo los codos hacia los lados y rotando externamente los brazos (como haciendo 'doble bíceps').", benefici: "Ejercicio estrella para la salud de los hombros y la postura, trabajando el deltoides posterior y los rotadores." },
            en: { nom: "Banded Face Pulls", instruccions: "With the band anchored high, pull the ends toward your forehead, opening your elbows to the sides and externally rotating your arms (like doing a 'double bicep' pose).", benefici: "Star exercise for shoulder health and posture, working the posterior deltoid and rotators." }
        }
    },
    {
        id: "traccio-07",
        nom: "Rem vertical amb peses",
        imatge: "rem-vertical-amb-peses",
        categoria: "Tracció",
        complexitat: 3,
        equipament: "Peses",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "Dret, sostén les peses davant teu. Eleva-les verticalment cap a la barbeta, mantenint els colzes sempre per sobre de les mans i prop del cos.",
        benefici_salut: "Treballa els trapezis i el deltoides mitjà, millorant l'estètica i la força del cinturó escapular.",
        translations: {
            ca: { nom: "Rem vertical amb peses", instruccions: "Dret, sostén les peses davant teu. Eleva-les verticalment cap a la barbeta, mantenint els colzes sempre per sobre de les mans i prop del cos.", benefici: "Treballa els trapezis i el deltoides mitjà, millorant l'estètica i la força del cinturó escapular." },
            es: { nom: "Remo al mentón con pesas", instruccions: "De pie, sujeta las pesas frente a ti. Elévalas verticalmente hacia la barbilla, manteniendo los codos siempre por encima de las manos y cerca del cuerpo.", benefici: "Trabaja los trapecios y el deltoides medio, mejorando la estética y la fuerza de la cintura escapular." },
            en: { nom: "Upright Row", instruccions: "Standing, hold the weights in front of you. Raise them vertically toward your chin, always keeping your elbows above your hands and close to your body.", benefici: "Works the traps and middle deltoid, improving the aesthetics and strength of the shoulder girdle." }
        }
    },
    {
        id: "traccio-08",
        nom: "Elevacions laterals",
        imatge: "elevacions-laterals",
        categoria: "Empenta",
        complexitat: 2,
        equipament: "Pes (mancuerna)",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 12-15 repeticions per braç",
        instruccions: "Sostén un pes en una mà amb el braç paral·lel al cos. Eleva el braç lateralment fins a arribar a un angle de 90 graus (a l'alçada de l'espatlla). Baixa lentament per tornar a la posició inicial. Completa la sèrie i repeteix amb l'altre braç.",
        benefici_salut: "Aïllament eficaç del deltoide lateral, millorant l'amplada i l'estabilitat de l'espatlla.",
        translations: {
            ca: { nom: "Elevacions laterals a una mà", instruccions: "Sostén un pes en una mà amb el braç paral·lel al cos. Eleva el braç lateralment fins a arribar a un angle de 90 graus. Baixa lentament per tornar a la posició inicial. Completa la sèrie i repeteix amb l'altre braç.", benefici: "Aïllament eficaç del deltoide lateral, millorant l'amplada i l'estabilitat de l'espatlla." },
            es: { nom: "Elevaciones laterales a una mano", instruccions: "Sujeta un peso en una mano con el brazo paralelo al cuerpo. Eleva el brazo lateralmente hasta llegar a un ángulo de 90 grados. Baja lentamente para volver a la posición inicial. Completa la serie y repite con el otro brazo.", benefici: "Aislamiento eficaz del deltoide lateral, mejorando la amplitud y la estabilidad del hombro." },
            en: { nom: "One-Arm Lateral Raise", instruccions: "Hold a weight in one hand with your arm parallel to your body. Raise your arm laterally until reaching a 90-degree angle. Lower slowly to return to the starting position. Complete the set and repeat with the other arm.", benefici: "Effective isolation of the lateral deltoid, improving shoulder width and stability." }
        }
    },
    {
        id: "traccio-10",
        nom: "Curl de bíceps amb goma (dempeus)",
        imatge: "curl-de-biceps-amb-goma-dempeus",
        categoria: "Tracció",
        complexitat: 1,
        equipament: "Goma de resistència (banda elàstica)",
        materials: ["gomes", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 12-15 repeticions",
        instruccions: "Posa't dempeus i trepitja la goma amb els dos peus (o amb un, per menys resistència) al centre. Agafa els extrems de la goma amb les mans, amb els palmells mirant cap endavant. Mantenint els colzes enganxats al cos, flexiona els braços portant les mans cap a les espatlles. Baixa lentament.",
        benefici_salut: "Treballa la força dels braços, amb la particularitat que la resistència de la goma augmenta a mesura que puges (quan el múscul està més contret), cosa que és excel·lent per a la salut de l'articulació del colze.",
        translations: {
            ca: { nom: "Curl de bíceps amb goma", instruccions: "Posa't dempeus i trepitja la goma amb els dos peus al centre. Agafa els extrems amb les mans, palmells endavant. Mantenint els colzes enganxats al cos, flexiona els braços portant les mans cap a les espatlles. Baixa lentament.", benefici: "Treballa la força dels braços, amb una resistència creixent que és excel·lent per a la salut del colze." },
            es: { nom: "Curl de bíceps con goma", instruccions: "Ponte de pie y pisa la goma con los dos pies en el centro. Coge los extremos con las manos, palmas hacia adelante. Manteniendo los codos pegados al cuerpo, flexiona los brazos llevando las manos hacia los hombros. Baja lentamente.", benefici: "Trabaja la fuerza de los brazos, con una resistencia creciente que es excelente para la salud del codo." },
            en: { nom: "Banded Bicep Curls", instruccions: "Stand and step on the band with both feet in the center. Grab the ends with your hands, palms facing forward. Keeping your elbows tucked in, bend your arms bringing your hands toward your shoulders. Lower slowly.", benefici: "Works arm strength, with increasing resistance that is excellent for elbow health." }
        }
    },

    // --- CORE ---
    {
        id: "core-01",
        nom: "Planxa abdominal",
        imatge: "planxa-abdominal",
        categoria: "Core",
        complexitat: 3,
        equipament: "Terra (estoreta)",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 45-60 segons",
        instruccions: "Recolza't sobre els avantbraços i la punta dels peus. Mantén el cos en una línia recta, sense que el maluc s'enfonsi ni pugi massa. Prem fort l'abdomen i els glutis.",
        benefici_salut: "Millora l'estabilitat de la columna, prevé dolors d'esquena i enforteix tota la musculatura profunda del tronc.",
        translations: {
            ca: { nom: "Planxa abdominal", instruccions: "Recolza't sobre els avantbraços i la punta dels peus. Mantén el cos en una línia recta, sense que el maluc s'enfonsi ni pugi massa. Prem fort l'abdomen i els glutis.", benefici: "Millora l'estabilitat de la columna, prevé dolors d'esquena i enforteix tota la musculatura profunda del tronc." },
            es: { nom: "Plancha abdominal", instruccions: "Apóyate sobre los antebrazos y las puntas de los pies. Mantén el cuerpo en una línea recta, sin que la cadera se hunda ni suba demasiado. Aprieta fuerte el abdomen y los glúteos.", benefici: "Mejora la estabilidad de la columna, previene dolores de espalda y fortalece toda la musculatura profunda del tronco." },
            en: { nom: "Abdominal Plank", instruccions: "Support yourself on your forearms and toes. Keep your body in a straight line, without your hips sagging or rising too much. Squeeze your abdomen and glutes hard.", benefici: "Improves spinal stability, prevents back pain, and strengthens the entire deep core musculature." }
        }
    },
    {
        id: "core-02",
        nom: "Gir rus amb pesa",
        imatge: "gir-rus-amb-pesa",
        categoria: "Core",
        complexitat: 3,
        equipament: "Pesa (mancuerna)",
        materials: ["peses", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 20 girs",
        instruccions: "Assegut amb els genolls flexionats i els talons lleugerament elevats. Sosté una pesa amb les dues mans i gira el tors d'un costat a l'altre, tocant gairebé terra amb la pesa en cada rotació.",
        benefici_salut: "Treballa els oblics i la capacitat de rotació del tronc, essencial per a la funcionalitat esportiva.",
        translations: {
            ca: { nom: "Gir rus amb pesa", instruccions: "Assegut amb els genolls flexionats i els talons lleugerament elevats. Sosté una pesa amb les dues mans i gira el tors d'un costat a l'altre, tocant gairebé terra amb la pesa en cada rotació.", benefici: "Treballa els oblics i la capacitat de rotació del tronc, essencial per a la funcionalitat esportiva." },
            es: { nom: "Giro ruso con pesa", instruccions: "Sentado con las rodillas flexionadas y los talones ligeramente elevados. Sujeta una pesa con ambas manos y gira el torso de un lado a otro, tocando casi el suelo con la pesa en cada rotación.", benefici: "Trabaja los oblicuos y la capacidad de rotación del tronco, esencial para la funcionalidad deportiva." },
            en: { nom: "Russian Twist with Weight", instruccions: "Seated with your knees bent and heels slightly elevated. Hold a weight with both hands and twist your torso from side to side, almost touching the ground with the weight on each rotation.", benefici: "Works the obliques and torso rotation capacity, essential for athletic functionality." }
        }
    },
    {
        id: "core-03",
        nom: "Deadbug",
        imatge: "deadbug",
        categoria: "Core",
        complexitat: 4,
        equipament: "Terra (estoreta)",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 12 repeticions totals",
        instruccions: "Estirat d'esquena, amb els braços cap al sostre i les cames en 90º. Baixa simultàniament la cama dreta i el braç esquerre sense que l'esquena baixa s'enlairi de terra. Torna al centre i canvia.",
        benefici_salut: "Ensenya a dissociar el moviment de les extremitats de l'estabilitat lumbo-pèlvica, sent un exercici de control motor excepcional.",
        translations: {
            ca: { nom: "Deadbug", instruccions: "Estirat d'esquena, amb els braços cap al sostre i les cames en 90º. Baixa simultàniament la cama dreta i el braç esquerre sense que l'esquena baixa s'enlairi de terra. Torna al centre i canvia.", benefici: "Ensenya a dissociar el moviment de les extremitats de l'estabilitat lumbo-pèlvica, sent un exercici de control motor excepcional." },
            es: { nom: "Bicho muerto (Deadbug)", instruccions: "Tumbado boca arriba, con los brazos hacia el techo y las piernas en 90º. Baja simultáneamente la pierna derecha y el brazo izquierdo sin que la espalda baja se despegue del suelo. Vuelve al centro y cambia.", benefici: "Enseña a disociar el movimiento de las extremidades de la estabilidad lumbopélvica, siendo un ejercicio de control motor excepcional." },
            en: { nom: "Deadbug", instruccions: "Lie on your back, with your arms reaching for the ceiling and legs at 90º. Simultaneously lower your right leg and left arm without letting your lower back arch off the floor. Return to the center and switch.", benefici: "Teaches how to dissociate limb movement from lumbopelvic stability, making it an exceptional motor control exercise." }
        }
    },
    {
        id: "core-04",
        nom: "Woodchopper amb gomes",
        imatge: "woodchopper-amb-gomes",
        categoria: "Core",
        complexitat: 4,
        equipament: "Goma elàstica, Punt fix",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 12 repeticions per costat",
        instruccions: "Ancora la goma en un punt alt lateralment. Amb les dues mans, estira la goma en diagonal cap avall fins al maluc contrari, rotant el tors i els peus de manera coordinada.",
        benefici_salut: "Potència la transmissió de forces entre el tren inferior i superior a través del core en moviments de rotació.",
        translations: {
            ca: { nom: "Woodchopper amb gomes", instruccions: "Ancora la goma en un punt alt lateralment. Amb les dues mans, estira la goma en diagonal cap avall fins al maluc contrari, rotant el tors i els peus de manera coordinada.", benefici: "Potència la transmissió de forces entre el tren inferior i superior a través del core en moviments de rotació." },
            es: { nom: "Leñador con gomas (Woodchopper)", instruccions: "Ancla la goma en un punto alto lateralmente. Con ambas manos, tira de la goma en diagonal hacia abajo hasta la cadera contraria, rotando el torso y los pies de manera coordinada.", benefici: "Potencia la transmisión de fuerzas entre el tren inferior y superior a través del core en movimientos de rotación." },
            en: { nom: "Banded Woodchopper", instruccions: "Anchor the band high and to the side. With both hands, pull the band diagonally down to your opposite hip, rotating your torso and feet in a coordinated manner.", benefici: "Enhances the transmission of forces between the lower and upper body through the core during rotational movements." }
        }
    },
    {
        id: "core-05",
        nom: "Elevació de cames (estirat a banqueta)",
        imatge: "elevacio-de-cames-estirat-a-banqueta",
        categoria: "Core",
        complexitat: 3,
        equipament: "Banqueta",
        materials: ["banqueta", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 15 repeticions",
        instruccions: "Estirat a la banqueta, subjecta't per la part posterior del teu cap. Eleva les cames estirades fins als 90º i baixa-les lentament evitant arquejar l'esquena inferior.",
        benefici_salut: "Posa el focus en la part inferior de l'abdomen i els flexors del maluc, millorant la força de compressió abdominal.",
        translations: {
            ca: { nom: "Elevació de cames", instruccions: "Estirat a la banqueta, subjecta't per la part posterior del teu cap. Eleva les cames estirades fins als 90º i baixa-les lentament evitant arquejar l'esquena inferior.", benefici: "Posa el focus en la part inferior de l'abdomen i els flexors del maluc, millorant la força de compressió abdominal." },
            es: { nom: "Elevación de piernas", instruccions: "Tumbado en el banco, sujétate por la parte posterior de tu cabeza. Eleva las piernas estiradas hasta los 90º y bájalas lentamente evitando arquear la espalda inferior.", benefici: "Pone el foco en la parte inferior del abdomen y los flexores de la cadera, mejorando la fuerza de compresión abdominal." },
            en: { nom: "Leg Raises", instruccions: "Lie on the bench and hold on behind your head. Raise your straight legs to 90º and lower them slowly, avoiding arching your lower back.", benefici: "Focuses on the lower abdomen and hip flexors, improving abdominal compression strength." }
        }
    },
    {
        id: "core-06",
        nom: "Superman a terra",
        imatge: "superman-a-terra",
        categoria: "Core",
        complexitat: 2,
        equipament: "Terra (estoreta)",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 15 repeticions",
        instruccions: "Estirat cap per avall. Eleva simultàniament braços i cames uns centímetres de terra, contraient tota la cadena posterior (erectors espinals i glutis). Mantén la mirada a terra.",
        benefici_salut: "Vital per a la musculatura extensora de l'esquena, compensant el temps d'assegut i millorant l'higiene postural.",
        translations: {
            ca: { nom: "Superman a terra", instruccions: "Estirat cap per avall. Eleva simultàniament braços i cames uns centímetres de terra, contraient tota la cadena posterior. Mantén la mirada a terra.", benefici: "Vital per a la musculatura extensora de l'esquena, compensant el temps d'assegut i millorant l'higiene postural." },
            es: { nom: "Superman en el suelo", instruccions: "Tumbado boca abajo. Eleva simultáneamente brazos y piernas unos centímetros del suelo, contrayendo toda la cadena posterior. Mantén la mirada en el suelo.", benefici: "Vital para la musculatura extensora de la espalda, compensando el tiempo sentado y mejorando la erección postural." },
            en: { nom: "Superman", instruccions: "Lie face down. Simultaneously raise your arms and legs a few inches off the floor, contracting your entire posterior chain. Keep your gaze on the floor.", benefici: "Vital for the back extensor musculature, compensating for sitting time and improving upright posture." }
        }
    },
    {
        id: "core-07",
        nom: "Press Pallof amb gomes",
        imatge: "press-pallof-amb-gomes",
        categoria: "Core",
        complexitat: 4,
        equipament: "Goma elàstica, Punt fix",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 30 segons per costat",
        instruccions: "Dret, de costat al punt d'ancoratge de la goma. Subjecta la goma amb les dues mans davant del pit i estira-la endavant fins a bloquejar braços. Lluita contra la goma que t'estira lateralment cap al punt fix.",
        benefici_salut: "Exercici d'anti-rotació que enforteix els oblics i el core profund per protegir la columna de forces laterals inesperades.",
        translations: {
            ca: { nom: "Press Pallof amb gomes", instruccions: "Dret, de costat al punt d'ancoratge de la goma. Subjecta la goma amb les dues mans davant del pit i estira-la endavant fins a bloquejar braços. Lluita contra la goma que t'estira lateralment.", benefici: "Exercici d'anti-rotació que enforteix els oblics i el core profund per protegir la columna de forces laterals inesperades." },
            es: { nom: "Press Pallof con gomas", instruccions: "De pie, de lado al punto de anclaje de la goma. Sujeta la goma con ambas manos frente al pecho y estírala hacia adelante hasta bloquear los brazos. Lucha contra la goma que tira de ti lateralmente.", benefici: "Ejercicio de anti-rotación que fortalece los oblicuos y el core profundo para proteger la columna de fuerzas laterales inesperadas." },
            en: { nom: "Banded Pallof Press", instruccions: "Standing, perpendicular to the anchor point. Hold the band with both hands in front of your chest and press it forward until your arms are locked. Fight against the band pulling you laterally.", benefici: "Anti-rotation exercise that strengthens the obliques and deep core to protect the spine from unexpected lateral forces." }
        }
    },
    {
        id: "core-08",
        nom: "Intercanvi de pilota (V-Pass)",
        imatge: "intercanvi-de-pilota-v-pass",
        categoria: "Core",
        complexitat: 3,
        equipament: "Pilota suïssa (Fitball), Estora",
        materials: ["pilota", "pes_corporal"],
        repeticions_suggerides: "3 sèries de 10 a 15 intercanvis (mà-peu-mà compta com a 2)",
        instruccions: "Estirat d'esquena amb la pilota a les mans. Eleva braços i cames simultàniament per \"passar\" la pilota de les mans als peus (subjectant-la amb els turmells). Torna a baixar sense que la pilota ni les mans toquin terra, i repeteix l'intercanvi.",
        benefici_salut: "Treballa la coordinació intermuscular i tota la cadena anterior del tronc, amb un èmfasi especial en el control motor de la zona lumbo-pèlvica.",
        translations: {
            ca: { nom: "Intercanvi de pilota (V-Pass)", instruccions: "Estirat d'esquena amb la pilota a les mans. Eleva braços i cames simultàniament per 'passar' la pilota de les mans als peus. Torna a baixar sense que la pilota ni les mans toquin terra, i repeteix.", benefici: "Treballa la coordinació intermuscular i tota la cadena anterior del tronc, amb èmfasi en el control motor de la zona lumbo-pèlvica." },
            es: { nom: "Intercambio de pelota (V-Pass)", instruccions: "Tumbado boca arriba con la pelota en las manos. Eleva brazos y piernas simultáneamente para 'pasar' la pelota de las manos a los pies. Vuelve a bajar sin que la pelota ni las manos toquen el suelo, y repite.", benefici: "Trabaja la coordinación intermuscular y toda la cadena anterior del tronco, con énfasis en el control motor de la zona lumbopélvica." },
            en: { nom: "Stability Ball V-Pass", instruccions: "Lie on your back with the ball in your hands. Raise arms and legs simultaneously to 'pass' the ball from your hands to your feet. Lower back down without letting the ball or your hands touch the ground, and repeat.", benefici: "Works intermuscular coordination and the entire anterior chain of the trunk, with emphasis on motor control of the lumbopelvic zone." }
        }
    },
    {
        id: "core-09",
        nom: "Caminada del granger (Farmer's Walk)",
        imatge: "caminada-del-granger-farmer-s-walk",
        categoria: "Core",
        complexitat: 1,
        equipament: "Dues peses pesades",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 45-60 segons de caminada",
        instruccions: "Agafa una pesa a cada mà. Mantén l'esquena ben recta, les espatlles enrere (ben 'empaquetades') i la mirada al davant. Camina a passos curts i controlats durant el temps o distància fixats, evitant que el pes oscil·li.",
        benefici_salut: "Simula el transport de material o el pes de la motxilla. Enforteix l'adherència (vital per a grimpades) i l'estabilitat del tronc davant forces d'asimetria.",
        translations: {
            ca: { nom: "Caminada del granger", instruccions: "Agafa una pesa a cada mà. Mantén l'esquena ben recta, les espatlles enrere i la mirada al davant. Camina a passos curts i controlats evitant que el pes oscil·li.", benefici: "Simula el transport de material o el pes de la motxilla. Enforteix l'adherència i l'estabilitat del tronc davant forces d'asimetria." },
            es: { nom: "Paseo del granjero", instruccions: "Coge una pesa en cada mano. Mantén la espalda bien recta, los hombros atrás y la mirada al frente. Camina a pasos cortos y controlados evitando que el peso oscile.", benefici: "Simula el transporte de material o el peso de la mochila. Fortalece el agarre y la estabilidad del tronco ante fuerzas de asimetría." },
            en: { nom: "Farmer's Walk", instruccions: "Hold a weight in each hand. Keep your back straight, shoulders back, and gaze forward. Take short, controlled steps preventing the weight from swinging.", benefici: "Simulates carrying material or a backpack's weight. Strengthens grip and trunk stability against asymmetrical forces." }
        }
    },
    {
        id: "core-10",
        nom: "Jefferson Curl",
        imatge: "jefferson-curl",
        categoria: "Core",
        complexitat: 4,
        equipament: "Una pesa lleugera",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 5-8 repeticions molt lentes i controlades",
        instruccions: "Posa't dempeus. Amb les cames totalment rectes, comença a enrotllar la columna vèrtebra per vèrtebra, començant pel coll, baixant el pes cap als peus. Puja de la mateixa manera, desenrotllant-te lentament.",
        benefici_salut: "Decompressió de la columna i flexibilitat activa dels isquiotibials. Prepara l'esquena per aguantar la tensió constant de les pujades pronunciades.",
        translations: {
            ca: { nom: "Jefferson Curl", instruccions: "Posa't dempeus. Amb les cames totalment rectes, comença a enrotllar la columna vèrtebra per vèrtebra baixant el pes cap als peus. Puja de la mateixa manera, desenrotllant-te lentament.", benefici: "Decompressió de la columna i flexibilitat activa dels isquiotibials. Prepara l'esquena per aguantar la tensió constant de les pujades pronunciades." },
            es: { nom: "Curl Jefferson", instruccions: "Ponte de pie. Con las piernas totalmente rectas, empieza a enrollar la columna vértebra por vértebra bajando el peso hacia los pies. Sube de la misma manera, desenrollándote lentamente.", benefici: "Descompresión de la columna y flexibilidad activa de los isquiotibiales. Prepara la espalda para aguantar la tensión constante de las subidas pronunciadas." },
            en: { nom: "Jefferson Curl", instruccions: "Stand up. With your legs completely straight, begin to roll your spine down vertebra by vertebra, lowering the weight towards your feet. Rise in the same manner, unrolling slowly.", benefici: "Spinal decompression and active hamstring flexibility. Prepares the back to withstand the constant tension of steep climbs." }
        }
    },
    {
        id: "core-11",
        nom: "Tocs a l'espatlla en planxa",
        imatge: "tocs-a-espatlla-en-planxa",
        categoria: "Core",
        complexitat: 3,
        equipament: "Terra (estoreta)",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 20 segons",
        instruccions: "En posició de planxa alta amb braços estesos, aixeca una mà per tocar l'espatlla contrària de manera controlada. Mantén el maluc ferm i sense oscil·lacions. Canvia de costat. Mantenir la pelvis completament paral·lela al terra sense que bansi demana una gran força d'anti-rotació.",
        benefici_salut: "Desenvolupa l'estabilitat i la força de l'espatlla (grup rotador), millora el control dels abdominals profunds (core) i treballa la coordinació neuromuscular interhemisfèrica.",
        translations: {
            ca: { nom: "Tocs a l'espatlla en planxa", instruccions: "En posició de planxa alta amb braços estesos, aixeca una mà per tocar l'espatlla contrària de manera controlada. Mantén el maluc ferm i sense oscil·lacions. Canvia de costat. Mantenir la pelvis completament paral·lela al terra sense que bansi demana una gran força d'anti-rotació.", benefici: "Desenvolupa l'estabilitat i la força de l'espatlla (grup rotador), millora el control dels abdominals profunds (core) i treballa la coordinació neuromuscular interhemisfèrica." },
            es: { nom: "Toques de hombro en plancha", instruccions: "En posición de plancha alta con brazos extendidos, levanta una mano para tocar el hombro contrario de forma controlada. Mantén la cadera firme y sin oscilaciones. Cambia de lado. Mantener la pelvis completamente paralela al suelo sin que se balancee exige una gran fuerza de anti-rotación.", benefici: "Desarrolla la estabilidad y la fuerza del hombro (grupo rotador), mejora el control de los abdominales profundos (core) y trabaja la coordinación neuromuscular interhemisférica." },
            en: { nom: "Plank Shoulder Taps", instruccions: "In a high plank position with straight arms, lift one hand to touch the opposite shoulder in a controlled manner. Keep your hips steady without swaying. Switch sides. Keeping the pelvis completely parallel to the floor without rocking requires great anti-rotational strength.", benefici: "Develops shoulder stability and strength (rotator cuff), improves control of deep abdominals (core), and works on interhemispheric neuromuscular coordination." }
        }
    },
    {
        id: "cardio-01",
        nom: "Escaladors (Mountain Climbers)",
        categoria: "Cardio",
        complexitat: 2,
        equipament: "Pes corporal",
        imatge: "mountain-climbers",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 45 segons",
        instruccions: "Col·loca't en posició de planxa alta amb les mans sota les espatlles i el cos recte. Alterna ràpidament el moviment dels genolls cap al pit, com si estiguessis corrent en horitzontal.",
        benefici_salut: "Treball cardiovascular intens que enforteix el core i millora la coordinació.",
        translations: {
            ca: {
                nom: "Escaladors (Mountain Climbers)",
                instruccions: "Col·loca't en posició de planxa alta amb les mans sota les espatlles i el cos recte. Alterna ràpidament el moviment dels genolls cap al pit, com si estiguessis corrent en horitzontal. Mantén el maluc baix i el focus en l'estabilitat del tronc per evitar el balanceig excessiu.",
                benefici: "Treball cardiovascular intens que enforteix el core, millora la coordinació i augmenta la potència explosiva del tren inferior."
            },
            es: {
                nom: "Escaladores (Mountain Climbers)",
                instruccions: "Colócate en posición de plancha alta con las manos bajo los hombros y el cuerpo recto. Alterna rápidamente el movimiento de las rodillas hacia el pecho, como si estuvieras corriendo en horizontal. Mantén la cadera baja y el foco en la estabilidad del tronco para evitar balanceos excesivos.",
                benefici: "Trabajo cardiovascular intenso que fortalece el core, mejora la coordinación y aumenta la potencia explosiva del tren inferior."
            },
            en: {
                nom: "Mountain Climbers",
                instruccions: "Get into a high plank position with your hands under your shoulders and your body straight. Rapidly alternate driving your knees toward your chest, as if running horizontally. Keep your hips low and focus on core stability to prevent excessive swaying.",
                benefici: "Intense cardiovascular workout that strengthens the core, improves coordination, and increases explosive power in the lower body."
            }
        }
    },
    {
        id: "cardio-02",
        nom: "Burpees (adaptats)",
        categoria: "Cardio",
        complexitat: 4,
        equipament: "Pes corporal",
        imatge: "burpees-adaptats",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "Esquat, planxa, flexió i salt. Sense impacte si cal.",
        benefici_salut: "Alta despesa calòrica i treball de potència total.",
        translations: {
            ca: {
                nom: "Burpees (adaptats)",
                instruccions: "Comença d'esquena dreta, baixa en un esquat fins a tocar terra amb les mans, salta o camina cap enrere fins a la posició de planxa, realitza una flexió si el teu nivell ho permet, torna els peus cap a les mans i finalitza amb un salt vertical estenent els braços. Es pot realitzar sense salt per reduir l'impacte.",
                benefici: "Exercici de cos sencer extremadament eficaç per cremar calories, millorar la resistència cardiopulmonar i la coordinació motora."
            },
            es: {
                nom: "Burpees (adaptados)",
                instruccions: "Comienza con la espalda recta, baja en una sentadilla hasta tocar el suelo con las manos, salta o camina hacia atrás hasta la posición de plancha, realiza una flexión si tu nivel lo permite, devuelve los pies hacia las manos y finaliza con un salto vertical extendiendo los brazos. Se puede realizar sin salto para reducir el impacto.",
                benefici: "Ejercicio de cuerpo completo extremadamente eficaz para quemar calorías, mejorar la resistencia cardiopulmonar y la coordinación motora."
            },
            en: {
                nom: "Burpees (adapted)",
                instruccions: "Start with a straight back, drop into a squat until your hands touch the floor, jump or step back into a plank position, perform a push-up if your level allows, return your feet to your hands, and finish with a vertical jump extending your arms. Can be performed without the jump to reduce impact.",
                benefici: "Extremely effective full-body exercise for burning calories, improving cardiopulmonary endurance, and motor coordination."
            }
        }
    },
    {
        id: "cardio-03",
        nom: "Jumping Jacks (gomes)",
        categoria: "Cardio",
        complexitat: 2,
        equipament: "Goma elàstica",
        imatge: "jumping-jacks-gomes",
        materials: ["gomes"],
        repeticions_suggerides: "3 sèries de 1 minut",
        instruccions: "Salta obrint i tancant cames amb la goma als turmells.",
        benefici_salut: "Enforteix abductors i millora la coordinació.",
        translations: {
            ca: {
                nom: "Jumping Jacks (gomes)",
                instruccions: "Col·loca una mini-banda al voltant dels teus turmells. Comença dempeus amb els braços als costats. Salta obrint les cames lateralment mentre eleves els braços per sobre del cap. Torna a la posició inicial de forma controlada, lluitant contra la resistència de la goma en tot moment.",
                benefici: "Intensifica el treball lateral de les cames, especialment dels abductors i el gluti mitjà, alhora que manté el pols elevat."
            },
            es: {
                nom: "Jumping Jacks (con gomas)",
                instruccions: "Coloca una mini-banda alrededor de tus tobillos. Comienza de pie con los brazos a los lados. Salta abriendo las piernas lateralmente mientras elevas los brazos por encima de la cabeza. Vuelve a la posición inicial de forma controlada, luchando contra la resistencia de la goma en todo momento.",
                benefici: "Intensifica el trabajo lateral de las piernas, especialmente de los abductores y el glúteo medio, a la vez que mantiene el pulso elevado."
            },
            en: {
                nom: "Jumping Jacks (with bands)",
                instruccions: "Place a mini-band around your ankles. Start standing with your arms at your sides. Jump opening your legs laterally while raising your arms above your head. Return to the starting position in a controlled manner, fighting against the band's resistance at all times.",
                benefici: "Intensifies lateral leg work, especially of the abductors and gluteus medius, while keeping the heart rate elevated."
            }
        }
    },
    {
        id: "cardio-04",
        nom: "Salts del patinador (Skater Jumps)",
        categoria: "Cardio",
        complexitat: 3,
        equipament: "Pes corporal",
        imatge: "skater-jumps",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 20 repeticions",
        instruccions: "Salta lateralment d'un peu a l'altre rítmicament.",
        benefici_salut: "Millora l'equilibri dinàmic i la força lateral.",
        translations: {
            ca: {
                nom: "Salts del patinador (Skater Jumps)",
                instruccions: "Fes un salt lateral ample cap a la dreta, aterrant sobre el peu dret i creuant la cama esquerra per darrere. Immediatament, impulsa't cap a l'esquerra fent el moviment contrari, com si fossis un patinador de velocitat. Utilitza els braços per guanyar impuls i mantenir l'equilibri.",
                benefici: "Millora l'estabilitat lateral del genoll, l'equilibri dinàmic i la potència dels glutis i quàdriceps en moviments asimètrics."
            },
            es: {
                nom: "Saltos del patinador (Skater Jumps)",
                instruccions: "Realiza un salto lateral amplio hacia la derecha, aterrizando sobre el pie derecho y cruzando la pierna izquierda por detrás. Inmediatamente, impúlsate hacia la izquierda realizando el movimiento contrario, como si fueras un patinador de velocidad. Utiliza los brazos para ganar impulso y mantener el equilibrio.",
                benefici: "Mejora la estabilidad lateral de la rodilla, el equilibrio dinámico y la potencia de los glúteos y cuádriceps en movimientos asimétricos."
            },
            en: {
                nom: "Skater Jumps",
                instruccions: "Perform a wide lateral jump to the right, landing on your right foot and crossing your left leg behind. Immediately propel yourself to the left performing the opposite movement, as if you were a speed skater. Use your arms for momentum and balance.",
                benefici: "Improves lateral knee stability, dynamic balance, and power in the glutes and quads during asymmetrical movements."
            }
        }
    },
    {
        id: "cardio-05",
        nom: "Boxa a l'ombra (Shadow Boxing)",
        categoria: "Cardio",
        complexitat: 3,
        equipament: "Peses lleugeres",
        imatge: "shadow-boxing-peses",
        materials: ["peses"],
        repeticions_suggerides: "4 sèries de 1 minut",
        instruccions: "Llança cops de puny controlats amb peses lleugeres.",
        benefici_salut: "Tonificació de braços i agilitat cardiovascular.",
        translations: {
            ca: {
                nom: "Boxa a l'ombra (Shadow Boxing)",
                instruccions: "Subjecta una pesa lleugera a cada mà i col·loca't en posició de guàrdia. Llança cops de puny (jabs, cross i hams) de forma controlada i rítmica cap a un oponent imaginari. Mantén els genolls relaxats i els colzes a prop del cos, assegurant-te de no bloquejar l'articulació del colze en el cop.",
                benefici: "Tonificació de braços i espatlles mentre millora l'agilitat cardiovascular i la coordinació ull-mà sota una lleugera sobrecàrrega."
            },
            es: {
                nom: "Boxeo a la sombra (Shadow Boxing)",
                instruccions: "Sujeta una pesa ligera en cada mano y colócate en posición de guardia. Lanza puñetazos (jabs, cross y ganchos) de forma controlada y rítmica hacia un oponente imaginario. Mantén las rodillas relajadas y los codos cerca del cuerpo, asegurándote de no bloquear la articulación del codo en el golpe.",
                benefici: "Tonifica los brazos y los hombros mientras mejora la agilidad cardiovascular y la coordinación ojo-mano bajo una ligera sobrecarga."
            },
            en: {
                nom: "Shadow Boxing",
                instruccions: "Carry a light weight in each hand and get into a guard position. Throw punches (jabs, cross, and hooks) in a controlled and rhythmic manner toward an imaginary opponent. Keep your knees relaxed and elbows close to your body, making sure not to lock the elbow joint during the strike.",
                benefici: "Tones arms and shoulders while improving cardiovascular agility and eye-hand coordination under a light overload."
            }
        }
    },
    {
        id: "cardio-06",
        nom: "Thrusters",
        categoria: "Cardio",
        complexitat: 4,
        equipament: "Peses",
        imatge: "thrusters",
        materials: ["peses"],
        repeticions_suggerides: "3 sèries de 15 repeticions",
        instruccions: "Esquat i empenta de la càrrega sobre el cap.",
        benefici_salut: "Exercici metabòlic complet (força + cardio).",
        translations: {
            ca: {
                nom: "Thrusters",
                instruccions: "Sostén les peses a l'alçada de les espatlles. Baixa en un esquat profund mantenint l'esquena recta i el pes als talons. En pujar, aprofita l'impuls de les cames per estendre els braços i llançar les peses per sobre del cap en un moviment fluid i continu.",
                benefici: "Un dels moviments més complets per a la condició física general, combinant la força de les cames amb l'empenta vertical d'espatlles i un gran consum d'oxigen."
            },
            es: {
                nom: "Thrusters",
                instruccions: "Sujeta las pesas a la altura de los hombros. Baja en una sentadilla profunda manteniendo la espalda recta y el peso en los talones. Al subir, aprovecha el impulso de las piernas para extender los brazos y lanzar las pesas por encima de la cabeza en un movimiento fluido y continuo.",
                benefici: "Uno de los movimientos más completos para la condición física general, combinando la fuerza de las piernas con el empuje vertical de hombros y un gran consumo de oxígeno."
            },
            en: {
                nom: "Thrusters",
                instruccions: "Hold the weights at shoulder height. Drop into a deep squat keeping your back straight and your weight on your heels. As you rise, use the momentum from your legs to extend your arms and drive the weights overhead in one fluid and continuous movement.",
                benefici: "One of the most comprehensive movements for overall fitness, combining leg strength with vertical shoulder drive and high oxygen consumption."
            }
        }
    },
    {
        id: "cardio-07",
        nom: "Salts laterals sobre banqueta (Bench Lateral Hops)",
        categoria: "Cardio",
        complexitat: 5,
        equipament: "Banqueta",
        imatge: "salts-laterals-banqueta",
        materials: ["banqueta"],
        repeticions_suggerides: "3 sèries de 30 segons",
        instruccions: "Salta lateralment sobre la banqueta amb suport de mans.",
        benefici_salut: "Desenvolupa l'agilitat explosiva extrema.",
        translations: {
            ca: {
                nom: "Salts laterals sobre banqueta (Bench Lateral Hops)",
                instruccions: "Col·loca't de costat a la banqueta i recolza-hi les mans amb força. Flexiona els genolls i impulsa't per saltar amb els dos peus alhora cap a l'altre costat de la banqueta, aterrant de forma suau. Mantén el pes sobre les mans per facilitar el desplaçament aeri.",
                benefici: "Desenvolupa una agilitat explosiva extrema i coordina la força del tren superior amb la reactivitat de les cames."
            },
            es: {
                nom: "Saltos laterales sobre banco (Bench Lateral Hops)",
                instruccions: "Colócate de lado al banco y apoya las manos con fuerza. Flexiona las rodillas e impúlsate para saltar con ambos pies a la vez hacia el otro lado del banco, aterrizando de forma suave. Mantén el peso sobre las manos para facilitar el desplazamiento aéreo.",
                benefici: "Desarrolla una agilidad explosiva extrema y coordina la fuerza del tren superior con la reactividad de las piernas."
            },
            en: {
                nom: "Bench Lateral Hops",
                instruccions: "Stand profile to the bench and place your hands firmly on it. Bend your knees and propel yourself to jump with both feet at once to the other side of the bench, landing softly. Keep your weight on your hands to facilitate the aerial movement.",
                benefici: "Develops extreme explosive agility and coordinates upper body strength with leg reactivity."
            }
        }
    },
    {
        id: "cardio-08",
        nom: "Esquat amb salt (Jump Squat)",
        categoria: "Cardio",
        complexitat: 3,
        equipament: "Pes corporal",
        imatge: "esquat-amb-salt",
        materials: ["pes_corporal"],
        repeticions_suggerides: "3 sèries de 12 repeticions",
        instruccions: "Fes un esquat i salta verticalment amb potència.",
        benefici_salut: "Maximitza la potència explosiva de les cames.",
        translations: {
            ca: {
                nom: "Esquat amb salt (Jump Squat)",
                instruccions: "Baixa en posició d'esquat convencional fins que les cuixes estiguin paral·leles a terra. Des d'aquí, impulsa't amb explosivitat cap amunt realitzant un salt vertical tan alt com puguis. Aterra amb les puntes dels peus i flexiona els genolls immediatament per esmorteir l'impacte.",
                benefici: "Augmenta dràsticament la potència del tren inferior (pliometria), millora la densitat òssia i eleva ràpidament la freqüència cardíaca."
            },
            es: {
                nom: "Sentadilla con salto (Jump Squat)",
                instruccions: "Baja en posición de sentadilla convencional hasta que los muslos estén paralelos al suelo. Desde aquí, impúlsate con explosividad hacia arriba realizando un salto vertical tan alto como puedas. Aterriza con las puntas de los pies y flexiona las rodillas inmediatamente para amortiguar el impacto.",
                benefici: "Aumenta drásticamente la potencia del tren inferior (pliometría), mejora la densidad ósea y eleva rápidamente la frecuencia cardíaca."
            },
            en: {
                nom: "Jump Squat",
                instruccions: "Drop into a conventional squat position until your thighs are parallel to the floor. From there, explode upward performing a vertical jump as high as you can. Land on the balls of your feet and immediately bend your knees to cushion the impact.",
                benefici: "Dramatically increases lower body power (plyometrics), improves bone density, and rapidly raises heart rate."
            }
        }
    },
    {
        id: "descans-01",
        nom: "Descans",
        categoria: "Altres",
        ocult: true,
        complexitat: 1,
        equipament: "Cap",
        materials: ["cap"],
        repeticions_suggerides: "---",
        instruccions: "Aprofita per hidratar-te i recuperar el alè per a la següent sèrie. No cal que corris. El temps dedicat al descans no constarà al registre d'activitat.",
        benefici_salut: "Permet la recuperació muscular i del sistema nerviós.",
        translations: {
            ca: { nom: "Descans", instruccions: "Aprofita per hidratar-te i recuperar el alè per a la següent sèrie. No cal que corris. El temps dedicat al descans no constarà al registre d'activitat.", benefici: "Permet la recuperació muscular i del sistema nerviós." },
            es: { nom: "Descanso", instruccions: "Aprovecha para hidratarte y recuperar el aliento para la siguiente serie. No hace falta que corras. El tiempo dedicado al descanso no constará en el registro de actividad.", benefici: "Permite la recuperación muscular y del sistema nervioso." },
            en: { nom: "Rest", instruccions: "Take the opportunity to hydrate and catch your breath for the next set. No need to rush. Time spent resting will not be counted in the activity log.", benefici: "Allows for muscular and nervous system recovery." }
        }
    }
];

// Exportació per a ús en el mòdul principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CATALEG_EXERCICIS;
}
