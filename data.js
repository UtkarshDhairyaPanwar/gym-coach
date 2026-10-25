/* Gym Coach data: exercises, sessions, 12-week schedule, guides.
   Built for: 157 cm, 66 kg, first time in a gym, 5 kg dumbbells, fat loss. Rest day Monday. */

// kind: machine | dumbbell | body | cardio
// rest in seconds. reps "10-12" = double progression range. hold = seconds per set instead of reps.
// step = kg added when every set hits the top of the range. start = first-day weight.
const EX = {
  /* ---------- CARDIO MACHINES ---------- */
  treadmill: {
    name: "Treadmill incline walk", kind: "cardio", photo: "treadmill", muscles: "Heart, legs, glutes. Top fat burner for beginners.",
    looks: "A long moving belt with a tall console in front. Two side rails, a red safety clip on a cord, and big buttons for SPEED and INCLINE.",
    setup: ["Stand on the side rails, not the belt.", "Clip the red safety cord to your shirt. If you fall, it pulls out and stops the belt.", "Press Quick Start. The belt moves slowly.", "Step on and raise speed to 4.5 to 5.5 km/h.", "Raise INCLINE to 6 to 10. Start at 6 in week 1."],
    how: ["Walk tall, chest up, look ahead.", "Arms swing naturally. Do not hold the rails, it cancels the incline.", "Breathing should be fast but you can still talk in short sentences.", "To stop: lower incline to 0, lower speed, then press Stop."],
    mistakes: ["Holding the console and leaning back.", "Jumping off a moving belt.", "Going so fast you have to jog. Walking uphill is the point."],
    settings: "Speed 4.5-5.5 km/h · Incline 6-10",
    alts: ["bike", "elliptical"]
  },
  bike: {
    name: "Stationary bike", kind: "cardio", photo: "bike", muscles: "Heart, thighs. Easy on knees.",
    looks: "A bike with no wheels. Seat, handlebars, pedals with straps, and a small screen with + and - buttons for resistance (LEVEL).",
    setup: ["Stand next to the bike. Set seat height level with your hip bone.", "Sit and put one pedal at the bottom. Your knee should be slightly bent, not locked.", "Pull the foot straps snug.", "Press Start or just pedal, the screen wakes up."],
    how: ["Pedal at 70 to 90 RPM (shown on screen).", "Use LEVEL + so it feels like riding up a gentle slope.", "Keep your back straight, light grip on the bars.", "Intervals: HARD = level up and pedal fast, EASY = level down and spin."],
    mistakes: ["Seat too low, knees come up to the chest.", "Level so low your legs spin with no effort.", "Bouncing on the seat."],
    settings: "Level 4-8 · 70-90 RPM",
    alts: ["treadmill", "elliptical"]
  },
  elliptical: {
    name: "Elliptical (cross trainer)", kind: "cardio", photo: "elliptical", muscles: "Heart, legs, arms. Zero impact.",
    looks: "Two big foot pedals that move in an oval, two tall moving handles, and two fixed handles with metal pulse sensors.",
    setup: ["Hold the fixed handles and step onto the pedals one foot at a time.", "Start moving your legs. The screen turns on.", "Set LEVEL to 4 to 8."],
    how: ["Push and pull the moving handles while your legs move.", "Keep heels down, stand tall.", "Aim for a pace where you sweat but can still talk."],
    mistakes: ["Leaning on the handles.", "Tiptoeing.", "Level 1 for 30 minutes. It needs resistance to count."],
    settings: "Level 4-8 · steady pace",
    alts: ["treadmill", "bike"]
  },
  rower: {
    name: "Rowing machine", kind: "cardio", photo: "rower", muscles: "Whole body: legs, back, arms, heart.",
    looks: "A long low rail with a sliding seat, foot plates with straps at the front, a handle on a chain, and a round fan (flywheel) with a lever on the side.",
    setup: ["Set the side lever (damper) to 4 or 5.", "Sit, strap feet so the strap crosses the widest part of the foot.", "Grab the handle with both hands, arms straight."],
    how: ["Drive: push with LEGS first, then lean back slightly, then pull the handle to your belly button.", "Return: arms out, lean forward, then bend the knees. Reverse order.", "Legs 60%, body 20%, arms 20%.", "Smooth and steady, about 22 to 26 strokes per minute."],
    mistakes: ["Pulling with arms first.", "Damper on 10. It does not make you fitter, it hurts your back.", "Rounding the back."],
    settings: "Damper 4-5 · 22-26 strokes/min",
    alts: ["bike", "elliptical"]
  },

  /* ---------- STRENGTH MACHINES ---------- */
  legpress: {
    name: "Leg press", kind: "machine", photo: "legpress", muscles: "Thighs (quads), glutes, hamstrings.", rest: 90, step: 5, start: 20, unit: "kg on the stack or plates",
    looks: "You sit or lie back in a padded seat and push a big flat foot platform away from you. Either a weight stack with a pin, or posts on the side for plates.",
    setup: ["Adjust the back pad so your knees bend to about 90° when the platform is close.", "Feet on the platform, hip width, middle of the plate.", "Set the weight with the pin (stack) or add plates evenly on both sides.", "Hold the side handles. Push the platform up a little and release the safety handles."],
    how: ["Lower the platform slowly (2 seconds) until knees are near your chest.", "Push back up through your heels and mid-foot.", "Stop just before your knees lock straight.", "Breathe in going down, out pushing up."],
    mistakes: ["Locking the knees at the top.", "Lower back lifting off the pad at the bottom. Go less deep.", "Knees caving in."],
    alts: ["goblet", "stepup"]
  },
  legext: {
    name: "Leg extension", kind: "machine", photo: "legext", muscles: "Front of thighs (quads).", rest: 60, step: 2.5, start: 10,
    looks: "A seat with a padded roller in front of your shins. You kick the roller up. A weight stack with a pin is behind or beside the seat.",
    setup: ["Move the back pad so your knees line up with the red dot or the pivot point of the machine.", "Set the shin pad just above your ankles.", "Put the pin in the weight stack.", "Hold the side handles."],
    how: ["Straighten your legs to lift the pad. Squeeze the thigh for 1 second at the top.", "Lower slowly for 2 to 3 seconds.", "Keep your hips down on the seat."],
    mistakes: ["Swinging the weight up.", "Pad sitting on your feet instead of your shins.", "Letting the stack crash down."],
    alts: ["goblet", "stepup"]
  },
  legcurl: {
    name: "Seated leg curl", kind: "machine", photo: "legcurl", muscles: "Back of thighs (hamstrings).", rest: 60, step: 2.5, start: 10,
    looks: "A seat with a padded roller under your calves and a second pad that clamps down on your thighs. You pull the lower roller down and back.",
    setup: ["Line your knees up with the machine pivot.", "Calves rest on the lower roller, just above the heel.", "Lower the thigh pad until it holds your legs snug.", "Set the pin."],
    how: ["Bend your knees and pull the roller down and under the seat.", "Squeeze 1 second.", "Let it come back slowly."],
    mistakes: ["Thigh pad loose, hips lift.", "Short half reps.", "Jerking the weight."],
    alts: ["rdl", "bridge"]
  },
  pulldown: {
    name: "Lat pulldown", kind: "machine", photo: "pulldown", muscles: "Back (lats), biceps. Builds the V shape that makes the waist look smaller.", rest: 90, step: 2.5, start: 15,
    looks: "A seat with thigh pads, and a long bar hanging from a cable above your head. Weight stack behind.",
    setup: ["Adjust the thigh pad so your thighs are locked under it.", "Stand, grab the bar a bit wider than shoulders, palms facing away.", "Sit down with the bar, arms straight overhead."],
    how: ["Lean back a little. Pull the bar to your upper chest.", "Think: elbows down into your back pockets.", "Slowly let the bar go back up until arms are straight.", "Breathe out as you pull."],
    mistakes: ["Pulling behind the neck.", "Leaning way back and swinging.", "Letting the stack crash."],
    alts: ["assist", "row1"]
  },
  cablerow: {
    name: "Seated cable row", kind: "machine", photo: "cablerow", muscles: "Middle back, rear shoulders, biceps. Fixes hunched posture.", rest: 90, step: 2.5, start: 15,
    looks: "A long low bench or seat with a foot plate, and a cable at chest or floor height with a V-shaped handle clipped on.",
    setup: ["Clip the V handle (or close-grip handle) to the cable.", "Sit, feet on the plate, knees slightly bent.", "Grab the handle, sit tall, arms straight."],
    how: ["Pull the handle to your belly. Squeeze your shoulder blades together.", "Hold 1 second.", "Let your arms go straight again slowly, without rounding your back."],
    mistakes: ["Rocking back and forth to move the weight.", "Shrugging shoulders up to the ears.", "Rounding the back on the way forward."],
    alts: ["row1", "pulldown"]
  },
  chestpress: {
    name: "Chest press machine", kind: "machine", photo: "chestpress", muscles: "Chest, front shoulders, triceps.", rest: 90, step: 2.5, start: 10,
    looks: "An upright seat with a back pad and two handles beside your chest that you push forward. Weight stack behind.",
    setup: ["Adjust the seat so the handles are level with the middle of your chest.", "Sit with your back flat on the pad, feet flat on the floor.", "Set the pin. Grab the handles."],
    how: ["Push the handles forward until arms are almost straight.", "Come back slowly until you feel a stretch in the chest.", "Breathe out as you push."],
    mistakes: ["Seat too low or high. Handles must be at mid-chest.", "Shoulders rolling forward off the pad.", "Locking the elbows hard."],
    alts: ["dbpress", "pushup"]
  },
  shoulderpress: {
    name: "Shoulder press machine", kind: "machine", photo: "shoulderpress", muscles: "Shoulders, triceps.", rest: 90, step: 2.5, start: 5,
    looks: "An upright seat with two handles at shoulder height that you push straight up over your head.",
    setup: ["Set the seat so the handles start at shoulder level.", "Back flat on the pad.", "Set the pin, grab the handles."],
    how: ["Press up until arms are nearly straight.", "Lower slowly back to shoulder level.", "Keep your ribs down, do not arch."],
    mistakes: ["Arching the lower back.", "Seat so low your shoulders pinch.", "Bouncing at the bottom."],
    alts: ["dbshoulder"]
  },
  pecdeck: {
    name: "Pec deck (chest fly)", kind: "machine", photo: "pecdeck", muscles: "Chest. Firms the chest area as you lose fat.", rest: 60, step: 2.5, start: 10,
    looks: "A seat with two arms that swing in from the sides. Either pads for your forearms or handles. The same machine often does rear delt fly if you face the other way.",
    setup: ["Set the seat so the handles are at chest height.", "Set the arms so you feel a light stretch at the start, not more.", "Grab the handles with a slight bend in the elbows."],
    how: ["Bring the handles together in front of your chest, like hugging a big tree.", "Squeeze 1 second.", "Open slowly until you feel the stretch."],
    mistakes: ["Starting too far back. Shoulders hate it.", "Bending and straightening the arms (that becomes a press).", "Going too heavy."],
    alts: ["chestpress", "pushup"]
  },
  cable: {
    name: "Cable face pull", kind: "machine", photo: "cable", muscles: "Rear shoulders, upper back. Pulls rounded shoulders back.", rest: 60, step: 2.5, start: 5,
    looks: "A tall frame with two pulleys that slide up and down a column. Clip a rope handle on. The pin on the column sets height, the stack sets weight.",
    setup: ["Slide the pulley to face height.", "Clip the rope attachment.", "Hold the rope ends with thumbs pointing back. Step back until arms are straight."],
    how: ["Pull the rope towards your face, hands split to either side of your ears.", "Elbows high, squeeze shoulder blades.", "Return slowly."],
    mistakes: ["Too heavy, leaning back.", "Elbows dropping low.", "Yanking."],
    alts: ["row1"]
  },
  pushdown: {
    name: "Cable triceps pushdown", kind: "machine", photo: "pushdown", muscles: "Back of the arms (triceps).", rest: 60, step: 2.5, start: 5,
    looks: "The same cable column as face pull. Pulley at the top, a short bar or rope clipped on.",
    setup: ["Slide the pulley to the top.", "Clip a straight bar or rope.", "Stand close, grab it, elbows pinned to your sides."],
    how: ["Push down until arms are straight.", "Only the forearms move. Elbows stay glued to your ribs.", "Let it rise slowly to chest height."],
    mistakes: ["Elbows flaring out.", "Leaning over the bar and using bodyweight."],
    alts: ["pushup"]
  },
  assist: {
    name: "Assisted pull-up", kind: "machine", photo: "assist", muscles: "Back, biceps. More weight = more help, so it is easier.", rest: 90, step: -2.5, start: 40,
    looks: "A tall machine with high handles and a padded knee platform. The weight stack HELPS you up. Higher number = easier.",
    setup: ["Set the pin high (40 kg or more help to start).", "Climb the steps, grab the top handles.", "Kneel on the pad. It sinks down with you."],
    how: ["Pull your chest up towards the handles.", "Lower slowly until arms are straight.", "Progress = LESS assistance over weeks."],
    mistakes: ["Dropping fast at the bottom.", "Half reps.", "Forgetting that the number works backwards."],
    alts: ["pulldown"]
  },
  abductor: {
    name: "Hip abductor", kind: "machine", photo: "abductor", muscles: "Outer hips (glute medius). Helps knees and posture.", rest: 60, step: 2.5, start: 15,
    looks: "A seat with two pads beside your knees. You push them apart. The same machine often does adductor (squeeze in) with a lever.",
    setup: ["Set the lever to the abductor (pads inside your knees, push out).", "Sit back, feet on the foot rests.", "Set the pin."],
    how: ["Push your knees apart as far as is comfortable.", "Hold 1 second.", "Close slowly."],
    mistakes: ["Letting the plates slam.", "Leaning forward to cheat."],
    alts: ["bridge"]
  },

  /* ---------- DUMBBELLS ---------- */
  goblet: {
    name: "Goblet squat", kind: "dumbbell", photo: "goblet", muscles: "Thighs, glutes, core.", rest: 90, step: 1, start: 5, unit: "kg, one dumbbell",
    looks: "One dumbbell held vertically against your chest like a goblet, cupped under the top end.",
    setup: ["Hold one dumbbell at your chest, elbows pointing down.", "Feet a bit wider than shoulders, toes slightly out."],
    how: ["Sit down between your heels as if onto a low chair.", "Go as low as you can with a flat back.", "Stand up by pushing the floor away.", "Knees follow your toes."],
    mistakes: ["Heels lifting.", "Knees caving in.", "Rounding the back to go deeper."],
    alts: ["legpress", "stepup"]
  },
  rdl: {
    name: "Dumbbell Romanian deadlift", kind: "dumbbell", photo: "rdl", muscles: "Hamstrings, glutes, lower back. Big calorie burner.", rest: 90, step: 1, start: 5, unit: "kg each hand",
    looks: "A dumbbell in each hand in front of your thighs. You fold at the hips. The diagram shows a barbell; the hinge is the same with dumbbells.",
    setup: ["Stand tall, feet hip width, dumbbells in front of your thighs.", "Soft knees, slight bend that stays fixed."],
    how: ["Push your hips BACK like closing a car door with your bum.", "Slide the dumbbells down your thighs to just below the knee.", "Back stays flat. Feel a stretch in the back of your legs.", "Squeeze your glutes to stand up."],
    mistakes: ["Rounding the back.", "Bending the knees into a squat.", "Dumbbells drifting away from the legs."],
    alts: ["legcurl", "bridge"]
  },
  dbpress: {
    name: "Dumbbell bench press", kind: "dumbbell", photo: "bench", muscles: "Chest, shoulders, triceps.", rest: 90, step: 1, start: 5, unit: "kg each hand",
    looks: "A flat padded bench and a dumbbell in each hand.",
    setup: ["Sit on the end of the bench, dumbbells on your thighs.", "Lie back, bringing them to your chest.", "Feet flat on the floor."],
    how: ["Press both up over your chest.", "Lower slowly until elbows are a bit below the bench.", "Elbows at about 45° from your body, not flared."],
    mistakes: ["Elbows flared straight out.", "Dropping the dumbbells fast at the end. Bring them to your chest, then sit up."],
    alts: ["chestpress", "pushup"]
  },
  incline: {
    name: "Incline dumbbell press", kind: "dumbbell", photo: "incline", muscles: "Upper chest, shoulders.", rest: 90, step: 1, start: 5, unit: "kg each hand",
    looks: "An adjustable bench set to a low angle (30°, usually the 2nd or 3rd notch) and two dumbbells.",
    setup: ["Set the bench back to 30°.", "Sit, dumbbells on thighs, lie back and bring them to your shoulders."],
    how: ["Press up and slightly together.", "Lower slowly to the top of the chest."],
    mistakes: ["Bench too steep (becomes a shoulder press).", "Arching off the bench."],
    alts: ["chestpress", "pushup"]
  },
  row1: {
    name: "One-arm dumbbell row", kind: "dumbbell", photo: "row1", muscles: "Back, biceps.", rest: 60, step: 1, start: 5, unit: "kg",
    looks: "One knee and one hand on a flat bench, a dumbbell in the other hand hanging down.",
    setup: ["Left knee and left hand on the bench, right foot on the floor.", "Back flat like a table.", "Dumbbell in the right hand, arm straight."],
    how: ["Pull the dumbbell to your hip pocket.", "Elbow close to your body.", "Lower slowly. Do all reps, then switch sides."],
    mistakes: ["Twisting the body to lift.", "Pulling to the chest instead of the hip."],
    alts: ["cablerow"]
  },
  dbshoulder: {
    name: "Seated dumbbell shoulder press", kind: "dumbbell", photo: "dbshoulder", muscles: "Shoulders, triceps.", rest: 90, step: 1, start: 4, unit: "kg each hand",
    looks: "An upright bench (back pad straight up) and two dumbbells.",
    setup: ["Set the bench upright.", "Sit, dumbbells at shoulder height, palms forward."],
    how: ["Press up until arms are almost straight.", "Lower slowly to ear level."],
    mistakes: ["Arching the back.", "Clanking the dumbbells together at the top."],
    alts: ["shoulderpress"]
  },
  lateral: {
    name: "Lateral raise", kind: "dumbbell", photo: "lateral", muscles: "Side shoulders. Wider shoulders make the waist look smaller.", rest: 60, step: 1, start: 2, unit: "kg each hand",
    looks: "Two light dumbbells, standing.",
    setup: ["Stand tall, light dumbbells at your sides. Start at 2 to 3 kg. Lighter than you think."],
    how: ["Raise arms out to the sides to shoulder height, slight bend in the elbow.", "Lead with the elbows, like pouring water from a jug.", "Lower slowly."],
    mistakes: ["Swinging.", "Going above shoulder height.", "Too heavy."],
    alts: ["shoulderpress"]
  },
  curl: {
    name: "Dumbbell curl", kind: "dumbbell", photo: "curl", muscles: "Biceps.", rest: 60, step: 1, start: 4, unit: "kg each hand",
    looks: "Two dumbbells, standing, palms forward.",
    setup: ["Stand tall, elbows by your sides."],
    how: ["Curl both up, keep elbows still.", "Squeeze at the top, lower slowly."],
    mistakes: ["Swinging the body.", "Elbows drifting forward."],
    alts: ["hammer"]
  },
  hammer: {
    name: "Hammer curl", kind: "dumbbell", photo: "curl", muscles: "Biceps, forearms.", rest: 60, step: 1, start: 4, unit: "kg each hand",
    looks: "Two dumbbells held like hammers, thumbs up.",
    setup: ["Stand tall, palms facing your legs."],
    how: ["Curl up keeping thumbs up.", "Lower slowly."],
    mistakes: ["Swinging.", "Rushing the lowering."],
    alts: ["curl"]
  },
  lunge: {
    name: "Walking lunge", kind: "dumbbell", photo: "lunge", muscles: "Thighs, glutes, balance.", rest: 90, step: 1, start: 0, unit: "kg each hand (0 = bodyweight)",
    looks: "Long steps forward, dropping the back knee towards the floor. Bodyweight first, then light dumbbells.",
    setup: ["Find a clear lane about 10 metres long.", "Hands on hips or a light dumbbell in each hand."],
    how: ["Take a long step. Lower until the back knee almost touches the floor.", "Front knee over the ankle, torso tall.", "Push up and step the back foot through into the next lunge.", "Reps = per leg."],
    mistakes: ["Short steps that push the front knee past the toes a lot.", "Leaning forward.", "Back knee slamming the floor."],
    alts: ["stepup", "goblet"]
  },
  stepup: {
    name: "Step-up", kind: "dumbbell", photo: "stepup", muscles: "Thighs, glutes.", rest: 60, step: 1, start: 0, unit: "kg each hand (0 = bodyweight)",
    looks: "A sturdy box or the flat bench at knee height or lower.",
    setup: ["Stand facing the box. Put one whole foot on it."],
    how: ["Push through that foot to stand up on the box.", "Step down slowly with the other foot.", "Do all reps one leg, then switch."],
    mistakes: ["Pushing off the bottom foot.", "Box too high."],
    alts: ["lunge", "legpress"]
  },
  farmer: {
    name: "Farmer's carry", kind: "dumbbell", photo: "farmer", muscles: "Grip, core, shoulders, whole body.", rest: 60, step: 2, start: 8, unit: "kg each hand", reps: "30 m",
    looks: "Walking with a heavy dumbbell in each hand.",
    setup: ["Pick up two dumbbells heavier than you curl. Start at 8 to 10 kg each."],
    how: ["Stand tall, shoulders back and down.", "Walk 30 metres (or 40 steps) with small, quick steps.", "Put them down carefully, bending at the knees."],
    mistakes: ["Leaning to one side.", "Shrugging up."],
    alts: ["plank"]
  },

  /* ---------- BODYWEIGHT / CORE ---------- */
  pushup: {
    name: "Incline push-up", kind: "body", photo: "pushup", muscles: "Chest, shoulders, triceps, core.", rest: 60, unit: "bodyweight",
    looks: "A push-up with your hands on a bench or the Smith machine bar, so your body is at an angle. Higher hands = easier.",
    setup: ["Hands on the edge of a bench, a bit wider than shoulders.", "Walk feet back until your body is a straight line."],
    how: ["Lower your chest to the bench.", "Push away. Body stays straight like a plank.", "When 3 x 12 feels easy, use a lower surface."],
    mistakes: ["Hips sagging.", "Elbows flared out to the sides."],
    alts: ["chestpress"]
  },
  plank: {
    name: "Plank", kind: "body", photo: "plank", muscles: "Deep core, abs. Builds a tight belly wall.", rest: 45, unit: "bodyweight",
    looks: "Forearms and toes on the floor, body straight like a board. Use a mat.",
    setup: ["Elbows under shoulders, forearms flat.", "Step feet back, toes tucked."],
    how: ["Squeeze glutes and pull belly button in.", "Breathe slowly. Hold for the time.", "If it shakes and the hips drop, stop. That set is done."],
    mistakes: ["Hips sagging (hurts the back).", "Hips piked up.", "Holding the breath."],
    alts: ["deadbug"]
  },
  sideplank: {
    name: "Side plank", kind: "body", photo: "sideplank", muscles: "Side abs (obliques).", rest: 45, unit: "bodyweight",
    looks: "On one forearm, body sideways in a straight line. Knees down = easier version.",
    setup: ["Lie on your side, elbow under shoulder.", "Knees bent (easy) or legs straight (harder)."],
    how: ["Lift hips until body is straight.", "Hold the time, then switch sides. Time = each side."],
    mistakes: ["Hips dropping.", "Rolling forward."],
    alts: ["plank"]
  },
  deadbug: {
    name: "Dead bug", kind: "body", photo: "deadbug", muscles: "Deep abs. Safest core move for beginners.", rest: 45, unit: "bodyweight",
    looks: "Lying on your back, arms up to the ceiling, knees bent at 90° in the air. On a mat.",
    setup: ["Lie on your back. Press your lower back into the mat.", "Arms straight up, knees over hips."],
    how: ["Slowly lower your right arm overhead and left leg out straight, hovering above the floor.", "Come back. Switch sides. Reps = per side.", "Lower back stays glued to the mat the whole time."],
    mistakes: ["Back arching off the mat.", "Going fast."],
    alts: ["plank"]
  },
  birddog: {
    name: "Bird dog", kind: "body", photo: "birddog", muscles: "Core, lower back, glutes.", rest: 45, unit: "bodyweight",
    looks: "On hands and knees on a mat, reaching one arm and the opposite leg out long.",
    setup: ["Hands under shoulders, knees under hips."],
    how: ["Reach right arm forward and left leg back until both are level with your back.", "Hold 2 seconds, come back, switch. Reps = per side."],
    mistakes: ["Twisting the hips up.", "Arching the lower back."],
    alts: ["deadbug"]
  },
  bridge: {
    name: "Glute bridge", kind: "body", photo: "bridge", muscles: "Glutes, hamstrings.", rest: 45, unit: "bodyweight, or a dumbbell on hips",
    looks: "Lying on your back, knees bent, lifting your hips up.",
    setup: ["Lie on your back, feet flat, hip width, close to your bum."],
    how: ["Push through your heels and lift your hips until your body is straight from knee to shoulder.", "Squeeze glutes 2 seconds at the top.", "Lower slowly."],
    mistakes: ["Arching the lower back instead of using the glutes.", "Feet too far away."],
    alts: ["rdl"]
  },
  backext: {
    name: "Back extension", kind: "machine", photo: "backext", muscles: "Lower back, glutes, hamstrings.", rest: 60, unit: "bodyweight",
    looks: "A slanted bench (45°) with a hip pad and a foot plate with ankle rollers. You hinge over the pad.",
    setup: ["Adjust the hip pad so its top edge sits just below your hip bones.", "Hook your heels under the rollers.", "Cross your arms on your chest."],
    how: ["Fold forward at the hips, back flat.", "Rise until your body is a straight line. Squeeze glutes.", "Do not swing up past straight."],
    mistakes: ["Pad too high, you cannot fold.", "Over-arching at the top."],
    alts: ["bridge", "birddog"]
  },
  climber: {
    name: "Mountain climber", kind: "body", photo: "climber", muscles: "Core, heart rate.", rest: 45, unit: "bodyweight",
    looks: "Push-up position, driving knees to the chest one at a time. Hands on a bench is easier.",
    setup: ["Hands on the floor or a bench, body straight."],
    how: ["Drive one knee towards the chest, then switch fast like running.", "Hips stay low. Reps = per leg."],
    mistakes: ["Hips up in the air.", "Hands too far forward."],
    alts: ["plank"]
  }
};

// Session items: {ex, sets, reps, hold, time, note}
const SESSIONS = {
  fbA: { title: "Full body A", kind: "strength", focus: "Learn the big machines", items: [
    { ex: "legpress", sets: 3, reps: "10-12" },
    { ex: "chestpress", sets: 3, reps: "10-12" },
    { ex: "pulldown", sets: 3, reps: "10-12" },
    { ex: "rdl", sets: 3, reps: "10-12" },
    { ex: "plank", sets: 3, hold: 20 },
    { ex: "treadmill", time: 10, note: "Finisher. Incline 6-8." }
  ]},
  fbB: { title: "Full body B", kind: "strength", focus: "Squat, row, press", items: [
    { ex: "goblet", sets: 3, reps: "10-12" },
    { ex: "cablerow", sets: 3, reps: "10-12" },
    { ex: "shoulderpress", sets: 3, reps: "10-12" },
    { ex: "legcurl", sets: 3, reps: "10-12" },
    { ex: "pushup", sets: 3, reps: "6-10" },
    { ex: "deadbug", sets: 3, reps: "6-8" },
    { ex: "bike", time: 10, note: "Finisher." }
  ]},
  cardioA: { title: "Incline walk + core", kind: "cardio", focus: "Fat-burning cardio, easy pace", items: [
    { ex: "treadmill", time: 25, note: "Steady. You can still talk." },
    { ex: "deadbug", sets: 2, reps: "8" },
    { ex: "birddog", sets: 2, reps: "8" },
    { ex: "bridge", sets: 2, reps: "12" },
    { ex: "sideplank", sets: 2, hold: 15 }
  ]},
  cardioB: { title: "Elliptical + bike + core", kind: "cardio", focus: "Two machines, zero impact", items: [
    { ex: "elliptical", time: 15 },
    { ex: "bike", time: 10 },
    { ex: "plank", sets: 3, hold: 20 },
    { ex: "bridge", sets: 2, reps: "12" },
    { ex: "deadbug", sets: 2, reps: "8" }
  ]},
  recovery: { title: "Active recovery", kind: "recovery", focus: "Long walk + stretch. Keeps fat loss going.", items: [
    { ex: "walk", time: 35, note: "Outdoor brisk walk on the ground. Replaces the usual 15 min." },
    { ex: "stretch", time: 10 }
  ]},

  upA: { title: "Upper body A", kind: "strength", focus: "Chest, back, shoulders, arms", items: [
    { ex: "chestpress", sets: 3, reps: "8-12" },
    { ex: "pulldown", sets: 3, reps: "8-12" },
    { ex: "dbshoulder", sets: 3, reps: "8-12" },
    { ex: "cablerow", sets: 3, reps: "10-12" },
    { ex: "lateral", sets: 2, reps: "12-15" },
    { ex: "pushdown", sets: 2, reps: "10-12" },
    { ex: "curl", sets: 2, reps: "10-12" },
    { ex: "treadmill", time: 10, note: "Finisher. Incline 8." }
  ]},
  loA: { title: "Lower body A", kind: "strength", focus: "Legs and glutes, the biggest calorie burners", items: [
    { ex: "legpress", sets: 4, reps: "8-12" },
    { ex: "rdl", sets: 3, reps: "8-12" },
    { ex: "legext", sets: 2, reps: "10-15" },
    { ex: "legcurl", sets: 2, reps: "10-15" },
    { ex: "bridge", sets: 3, reps: "12-15" },
    { ex: "plank", sets: 3, hold: 30 }
  ]},
  intervals: { title: "Bike intervals + core", kind: "cardio", focus: "Short hard bursts. More burn in less time.", items: [
    { ex: "bike", time: 20, note: "3 min easy, then 6 rounds: 1 min HARD (level up) + 1 min easy. 5 min easy to finish." },
    { ex: "treadmill", time: 10, note: "Incline 8, steady." },
    { ex: "deadbug", sets: 3, reps: "8" },
    { ex: "sideplank", sets: 2, hold: 25 },
    { ex: "birddog", sets: 2, reps: "10" }
  ]},
  upB: { title: "Upper body B", kind: "strength", focus: "Upper chest, back width, posture", items: [
    { ex: "incline", sets: 3, reps: "8-12" },
    { ex: "row1", sets: 3, reps: "8-12" },
    { ex: "pecdeck", sets: 3, reps: "10-15" },
    { ex: "assist", sets: 3, reps: "6-10" },
    { ex: "cable", sets: 2, reps: "12-15" },
    { ex: "hammer", sets: 2, reps: "10-12" },
    { ex: "elliptical", time: 10, note: "Finisher." }
  ]},
  loB: { title: "Lower body B", kind: "strength", focus: "Single leg, hips, carries", items: [
    { ex: "goblet", sets: 3, reps: "8-12" },
    { ex: "lunge", sets: 3, reps: "8-10" },
    { ex: "backext", sets: 3, reps: "10-15" },
    { ex: "abductor", sets: 2, reps: "12-15" },
    { ex: "farmer", sets: 3, reps: "30 m" },
    { ex: "sideplank", sets: 2, hold: 25 }
  ]},

  push: { title: "Push", kind: "strength", focus: "Chest, shoulders, triceps", items: [
    { ex: "chestpress", sets: 4, reps: "8-10" },
    { ex: "incline", sets: 3, reps: "8-12" },
    { ex: "shoulderpress", sets: 3, reps: "8-12" },
    { ex: "pecdeck", sets: 3, reps: "12-15" },
    { ex: "lateral", sets: 3, reps: "12-15" },
    { ex: "pushdown", sets: 3, reps: "10-12" },
    { ex: "treadmill", time: 12, note: "Finisher. Incline 10." }
  ]},
  pull: { title: "Pull", kind: "strength", focus: "Back, rear shoulders, biceps", items: [
    { ex: "pulldown", sets: 4, reps: "8-10" },
    { ex: "cablerow", sets: 3, reps: "8-12" },
    { ex: "row1", sets: 3, reps: "8-12" },
    { ex: "assist", sets: 3, reps: "6-10" },
    { ex: "cable", sets: 3, reps: "12-15" },
    { ex: "curl", sets: 3, reps: "10-12" },
    { ex: "rower", time: 10, note: "Finisher. Steady." }
  ]},
  legs: { title: "Legs", kind: "strength", focus: "The big one. Highest calorie burn of the week.", items: [
    { ex: "legpress", sets: 4, reps: "8-10" },
    { ex: "rdl", sets: 3, reps: "8-12" },
    { ex: "lunge", sets: 3, reps: "10" },
    { ex: "legcurl", sets: 3, reps: "10-12" },
    { ex: "legext", sets: 3, reps: "12-15" },
    { ex: "plank", sets: 3, hold: 40 }
  ]},
  circuit: { title: "Fat-burn circuit", kind: "cardio", focus: "4 rounds, little rest. Heart rate stays high.", circuit: true, items: [
    { ex: "rower", time: 2, note: "Round part 1: 2 min hard rowing." },
    { ex: "goblet", sets: 4, reps: "12", note: "Circuit: one set per round, rest 30 s." },
    { ex: "pushup", sets: 4, reps: "10" },
    { ex: "farmer", sets: 4, reps: "30 m" },
    { ex: "climber", sets: 4, reps: "15" },
    { ex: "bike", time: 10, note: "Easy spin to finish." }
  ]},
  fbC: { title: "Full body strength", kind: "strength", focus: "Heavier, fewer reps. See how far you have come.", items: [
    { ex: "legpress", sets: 3, reps: "6-10" },
    { ex: "chestpress", sets: 3, reps: "6-10" },
    { ex: "pulldown", sets: 3, reps: "6-10" },
    { ex: "rdl", sets: 3, reps: "8-10" },
    { ex: "dbshoulder", sets: 2, reps: "8-12" },
    { ex: "farmer", sets: 3, reps: "30 m" },
    { ex: "treadmill", time: 10, note: "Finisher." }
  ]}
};

// Non-gym items used inside sessions
EX.walk = { name: "Brisk outdoor walk", kind: "cardio", photo: null, muscles: "Heart, legs. Low stress, keeps the calorie burn up.",
  looks: "Your usual ground. Walk fast enough that you breathe harder but can still talk.",
  setup: ["Comfortable shoes, water."], how: ["Brisk pace, arms swinging.", "Add short uphill or stairs if you have them."], mistakes: ["Strolling. Keep it brisk."], settings: "Brisk pace", alts: [] };
EX.stretch = { name: "Stretch routine", kind: "body", photo: null, muscles: "Hips, hamstrings, chest, back.",
  looks: "A mat and 10 quiet minutes.", setup: ["Use a mat."],
  how: ["Hip flexor stretch: kneel on one knee, push hips forward. 40 s each side.", "Hamstring stretch: lie on your back, one leg up, hold behind the knee. 40 s each.", "Chest stretch: forearm on a door frame, step through. 40 s each side.", "Child's pose: knees wide, sit back on heels, arms long. 60 s.", "Cat-cow on hands and knees: 10 slow rounds."],
  mistakes: ["Bouncing.", "Pushing into pain. A stretch is a pull, not a pain."], settings: "", alts: [] };

const PHASES = [
  { n: 1, name: "Foundation", weeks: [1, 4], color: "grape", line: "Learn every machine. Light weights, perfect form, build the habit.",
    days: { 2: ["fbA", "fbB"], 3: "cardioA", 4: ["fbB", "fbA"], 5: "cardioB", 6: ["fbA", "fbB"], 0: "recovery" } },
  { n: 2, name: "Build", weeks: [5, 8], color: "sky", line: "Upper and lower split. More sets, add weight every week you can.",
    days: { 2: "upA", 3: "loA", 4: "intervals", 5: "upB", 6: "loB", 0: "recovery" } },
  { n: 3, name: "Burn", weeks: [9, 12], color: "accent", line: "Push, pull, legs plus a fat-burn circuit. The hardest and most rewarding block.",
    days: { 2: "push", 3: "pull", 4: "legs", 5: "circuit", 6: "fbC", 0: "recovery" } }
];

const WARMUP = [
  "15 min jog / walk on the ground (you already do this)",
  "Arm circles, 10 forward + 10 back",
  "Leg swings, 10 each leg",
  "Bodyweight squats x 10",
  "Hip hinges x 10 (hands on hips, push bum back)",
  "First exercise: 1 light set of 10 before the real sets"
];
const COOLDOWN = [
  "Chest stretch on a door frame, 30 s each side",
  "Hamstring stretch, 30 s each leg",
  "Hip flexor stretch, 30 s each side",
  "Child's pose, 45 s",
  "Drink water. Log your weights (done automatically)."
];

const GYM101 = [
  { t: "How a weight-stack machine works", b: ["Most machines have a stack of flat weight plates with a number on each one.", "A long metal PIN slides into the hole under the weight you want. Everything above the pin is lifted.", "Check the unit: some stacks show lbs. 10 lbs is about 4.5 kg.", "If a number is missing, count plates. Ask staff: \"How much is one plate?\""] },
  { t: "Adjusting a machine", b: ["Seats and pads move with a POP PIN: a round knob you pull out, slide, then let go until it clicks.", "Most machines have a sticker with a picture showing the setup. Read it first.", "Rule of thumb: the joint that moves (knee, shoulder, elbow) lines up with the machine's pivot point, often marked with a red or yellow dot."] },
  { t: "Plate-loaded vs stack", b: ["Stack machines: pick weight with a pin.", "Plate-loaded machines (some leg presses): slide round plates onto posts on BOTH sides equally.", "The sled itself already weighs something, often 20 to 40 kg. Ask staff."] },
  { t: "Reps, sets, rest", b: ["Rep = one full movement.", "Set = a group of reps done back to back. \"3 x 12\" = 3 sets of 12.", "Rest = the timer in this app. Breathe, drink, then the next set.", "Weight is right when the last 2 reps are hard but your form stays clean. You should feel you could do 2 more, not 10 more."] },
  { t: "Your first day", b: ["Ask the trainer on the floor to show you where each machine on today's list is. That is their job.", "Start with the lightest weight. Ego costs you weeks if you get hurt.", "Wipe the seat and handles after you finish.", "Put dumbbells back on the rack where they belong.", "If someone is using a machine, ask \"How many sets left?\" or use the swap button in this app."] },
  { t: "How to lift", b: ["Up in 1 to 2 seconds, down in 2 to 3 seconds. Slow down is where the work is.", "Breathe out on the effort, in on the way back.", "Never let the stack slam. Control it all the way.", "Sharp or joint pain = stop. Muscle burn = normal."] }
];

const FOODTIPS = {
  rules: [
    ["No spot reduction.", "Fat leaves everywhere at once. Belly and chest usually go last, so keep going."],
    ["Diet does most of it.", "Eat a little less than you burn. The gym keeps your muscle and shapes what is left."],
    ["Lift, walk, sleep.", "Weights 4 days, 8,000+ steps, 7 to 8 hours of sleep."],
    ["Trust the tape.", "Your waist can shrink while the scale stays flat. Measure it every Monday."]
  ],
  truth: [
    "You cannot burn fat from only the belly or chest. No exercise does that. Your body loses fat from everywhere at once, in an order set by your genes. Belly and chest are often the last to go, so keep going.",
    "What works: eating a bit less than you burn (a calorie deficit), lifting weights so you keep muscle, walking a lot, and sleeping well.",
    "Diet does about 70% of fat loss. The gym shapes what is left underneath.",
    "Track your waist, not just the scale. Muscle weighs something, so the scale can stay flat while your waist shrinks."
  ],
  protein: [
    ["Eggs, 2 whole", "12 g"], ["Paneer, 100 g", "18 g"], ["Chicken breast, 100 g cooked", "31 g"], ["Soya chunks, 50 g dry", "26 g"],
    ["Greek yogurt / hung curd, 200 g", "18 g"], ["Dal, 1 katori cooked", "7-9 g"], ["Chana / rajma, 1 katori", "8 g"], ["Milk, 1 glass", "8 g"],
    ["Tofu, 100 g", "12 g"], ["Fish, 100 g cooked", "22 g"], ["Peanuts, 30 g", "7 g"], ["Whey, 1 scoop (optional)", "24 g"]
  ],
  plate: ["Half the plate: sabzi / salad", "Quarter: protein (dal, paneer, egg, chicken, curd)", "Quarter: roti or rice (2 roti or 1 small katori rice)", "1 tsp ghee or oil, not 3"],
  cut: ["Sugary chai: switch to 1 tsp sugar, then none", "Fried snacks: samosa, namkeen, pakora", "Juices and cold drinks: drink calories do not fill you up", "Late-night eating after dinner", "Alcohol: 1 drink = 1 extra meal"],
  habits: ["8,000 to 10,000 steps a day (your ground walk counts)", "Sleep 7 to 8 hours. Bad sleep = more belly fat hormone (cortisol) and more hunger", "3 litres of water", "Protein in every meal"]
};

const TIPS = [
  "Progress rule: when you hit the top of the rep range on every set, add weight next time. The app does the math.",
  "Your first two weeks will feel awkward. Everyone looked lost on day one.",
  "Sore muscles on day 2 are normal. They fade after week 2.",
  "Measure your waist every Monday morning before breakfast, at the belly button.",
  "Missed a day? Do not double up. Just do today's session.",
  "Lifting weights burns fat for hours after the session. Cardio alone loses muscle too.",
  "Protein in every meal keeps you full and protects muscle while you lose fat.",
  "Your outdoor jog counts as your warm-up. Walk in ready.",
  "Slow on the way down. 3 seconds lowering builds more muscle than more weight.",
  "Take a photo every 4 weeks, same light, same spot. The mirror lies, photos don't."
];
