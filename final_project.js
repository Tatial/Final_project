var cardNames = new Array;
cardNames = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles", 'The Fool reversed', 'The Magician reversed', 'The High Priestess reversed', 'The Empress reversed', 'The Emperor reversed', 'The Hierophant reversed', 'The Lovers reversed', 'The Chariot reversed', 'Strength reversed', 'The Hermit reversed', 'Wheel of Fortune reversed', 'Justice reversed', 'The Hanged Man reversed', 'Death reversed', 'Temperance reversed', 'The Devil reversed', 'The Tower reversed', 'The Star reversed', 'The Moon reversed', 'The Sun reversed', 'Judgment reversed', 'The World reversed', 'Ace of Wands reversed', 'Two of Wands reversed', 'Three of Wands reversed', 'Four of Wands reversed', 'Five of Wands reversed', 'Six of Wands reversed', 'Seven of Wands reversed', 'Eight of Wands reversed', 'Nine of Wands reversed', 'Ten of Wands reversed', 'Page of Wands reversed', 'Knight of Wands reversed', 'Queen of Wands reversed', 'King of Wands reversed', 'Ace of Cups reversed', 'Two of Cups reversed', 'Three of Cups reversed', 'Four of Cups reversed', 'Five of Cups reversed', 'Six of Cups reversed', 'Seven of Cups reversed', 'Eight of Cups reversed', 'Nine of Cups reversed', 'Ten of Cups reversed', 'Page of Cups reversed', 'Knight of Cups reversed', 'Queen of Cups reversed', 'King of Cups reversed', 'Ace of Swords reversed', 'Two of Swords reversed', 'Three of Swords reversed', 'Four of Swords reversed', 'Five of Swords reversed', 'Six of Swords reversed', 'Seven of Swords reversed', 'Eight of Swords reversed', 'Nine of Swords reversed', 'Ten of Swords reversed', 'Page of Swords reversed', 'Knight of Swords reversed', 'Queen of Swords reversed', 'King of Swords reversed', 'Ace of Pentacles reversed', 'Two of Pentacles reversed', 'Three of Pentacles reversed', 'Four of Pentacles reversed', 'Five of Pentacles reversed', 'Six of Pentacles reversed', 'Seven of Pentacles reversed', 'Eight of Pentacles reversed', 'Nine of Pentacles reversed', 'Ten of Pentacles reversed', 'Page of Pentacles reversed', 'Knight of Pentacles reversed', 'Queen of Pentacles reversed', 'King of Pentacles reversed'];

var cardMeanings = new Array;
cardMeanings = [
    "The Fool: New beginnings, spontaneity, originality, innocence, free spirit",
    "The Magician: Manifestation, resourcefulness, power, creativity, confidence",
    "The High Priestess: Intuition, mystery, wisdom, secrets, spirituality",
    "The Empress: Nurturing, abundance, fertility, sensuality, creativity",
    "The Emperor: Authority, leadership, stability, structure, ambition",
    "The Hierophant: Tradition, conformity, spiritual guidance, education, belief system",
    "The Lovers: Partnership, choices, love, attraction, duality",
    "The Chariot: Willpower, determination, success, control, victory",
    "Strength: Courage, inner strength, fortitude, confidence, self-control",
    "The Hermit: Solitude, introspection, guidance, inner wisdom, spiritual enlightenment",
    "Wheel of Fortune: Destiny, cycles, change, luck, karma",
    "Justice: Fairness, balance, truth, justice, legal matters",
    "The Hanged Man: Surrender, sacrifice, letting go, suspension, perspective",
    "Death: Transformation, change, letting go, rebirth, endings and new beginnings",
    "Temperance: Balance, harmony, moderation, self-control, healing",
    "The Devil: Temptation, addiction, materialism, bondage, darkness",
    "The Tower: Chaos, upheaval, disaster, revelation, awakening",
    "The Star: Hope, inspiration, serenity, optimism, guidance",
    "The Moon: Intuition, emotions, uncertainty, secrets, illusion",
    "The Sun: Vitality, joy, positivity, success, achievement",
    "Judgement: Rebirth, awakening, renewal, transformation, judgement",
    "The World: Completion, wholeness, fulfillment, achievement, travel",

    "Ace of Wands: New beginnings, inspiration, potential, growth, opportunity",
    "Two of Wands: Planning, progress, decisions, discovery, contemplation",
    "Three of Wands: Expansion, foresight, opportunity, overseas travel, trade",
    "Four of Wands: Celebration, harmony, homecoming, community, relaxation",
    "Five of Wands: Competition, conflict, diversity, challenges, tension",
    "Six of Wands: Success, recognition, progress, achievement, pride",
    "Seven of Wands: Perseverance, challenge, competition, defense, determination",
    "Eight of Wands: Progress, movement, rapid changes, quick decisions, travel",
    "Nine of Wands: Resilience, courage, persistence, test of faith, boundaries",
    "Ten of Wands: Responsibility, burden, hard work, stress, achievement",
    "Page of Wands: Exploration, passion, free spirit, discovery, excitement",
    "Knight of Wands: Action, adventure, fearlessness, impulsiveness, travel",
    "Queen of Wands: Leadership, confidence, determination, independent, creative",
    "King of Wands: Leadership, vision, entrepreneur, honor, creativity",

    "Ace of Cups: Love, emotion, new relationships, intuition, compassion",
    "Two of Cups: Partnership, love, balance, harmony, friendship",
    "Three of Cups: Celebration, friendship, creativity, community, collaborations",
    "Four of Cups: Meditation, contemplation, reevaluation, apathy, withdrawal",
    "Five of Cups: Loss, disappointment, grief, self-pity, betrayal",
    "Six of Cups: Reunion, nostalgia, childhood memories, innocence, joy",
    "Seven of Cups: Decisions, options, illusion, confusion, dreams",
    "Eight of Cups: Moving on, change, letting go, walking away, detachment",
    "Nine of Cups: Satisfaction, happiness, material abundance, emotional stability, wish fulfillment",
    "Ten of Cups: Harmony, joy, fulfillment, emotional security, happy family",
    "Page of Cups: Creativity, imagination, free spirit, intuitive messages, inner child",
    "Knight of Cups: Romance, charm, emotional intelligence, creativity, artistic pursuits",
    "Queen of Cups: Emotional maturity, compassion, nurturing, intuitive, healing",
    "King of Cups: Emotional balance, generosity, control of emotions, diplomat, wise counselor",

    "Ace of Swords: Clarity, truth, new ideas, mental power, breakthroughs",
    "Two of Swords: Indecision, choices, stalemate, blocked emotions, avoidance",
    "Three of Swords: Heartbreak, loss, grief, rejection, betrayal",
    "Four of Swords: Rest, solitude, meditation, contemplation, relaxation",
    "Five of Swords: Conflict, defeat, competition, betrayal, loss",
    "Six of Swords: Transition, change, leaving behind, travel, progress",
    "Seven of Swords: Deception, trickery, betrayal, secrecy, escape",
    "Eight of Swords: Restriction, oppression, fear, self-imposed limitations, victim mentality",
    "Nine of Swords: Anxiety, fear, nightmares, worry, guilt",
    "Ten of Swords: Betrayal, loss, defeat, crisis, hitting rock bottom",
    "Page of Swords: Curiosity, mental agility, restlessness, new ideas, communication",
    "Knight of Swords reversed: Impulsiveness, recklessness, aggression, haste, ruthlessness",
    "Queen of Swords: Independence, self-reliance, intelligence, honesty, sharp tongue",
    "King of Swords: Clarity, rationality, intellectual power, authority, truth",

    "Ace of Pentacles: Manifestation, financial opportunity, new beginnings, prosperity, abundance",
    "Two of Pentacles: Balance, adaptability, time management, prioritization, flexibility",
    "Three of Pentacles: Collaboration, teamwork, mastery, mentorship, skill-building",
    "Four of Pentacles: Security, conservatism, control, possession, savings",
    "Five of Pentacles: Poverty, financial loss, isolation, insecurity, hardship",
    "Six of Pentacles: Generosity, charity, giving, sharing, prosperity",
    "Seven of Pentacles: Patience, long-term view, sustainability, perseverance, investment",
    "Eight of Pentacles: Skill mastery, craftsmanship, hard work, detail-oriented, apprenticeship",
    "Nine of Pentacles: Luxury, self-sufficiency, financial independence, refinement, appreciation",
    "Ten of Pentacles: Legacy, inheritance, wealth, financial security, family",
    "Page of Pentacles: Manifestation, financial opportunity, new beginnings, curiosity, learning",
    "Knight of Pentacles: Hard work, responsibility, reliability, perseverance, ambition",
    "Queen of Pentacles: Practicality, generosity, warmth, nurturing, sensuality",
    "King of Pentacles: Wealth, stability, security, accomplishment, material success",

    "The Fool reversed: Recklessness, risk-taking without caution, carelessness, naivety, foolishness",
    "The Magician reversed: Trickery, manipulation, misuse of power, stalled progress, lack of focus",
    "The High Priestess reversed: Secrets revealed, lack of intuition, hidden agendas, uncertainty, confusion",
    "The Empress reversed: Neglect, creative block, dependence, lack of growth, emptiness",
    "The Emperor reversed: Tyranny, abuse of power, lack of control, chaos, instability",
    "The Hierophant reversed: Blind obedience, deviation from tradition, unorthodox beliefs, rebelliousness, ignorance",
    "The Lovers reversed: Disharmony, conflict, poor choices, imbalance, heartbreak",
    "The Chariot reversed: Defeat, lack of direction, failure, lack of control, aggression",
    "Strength reversed: Weakness, self-doubt, insecurity, lack of courage, inner turmoil",
    "The Hermit reversed: Isolation, loneliness, withdrawal, avoidance, lost direction",
    "Wheel of Fortune reversed: Bad luck, resistance to change, external influences, unexpected events, personal upheaval",
    "Justice reversed: Injustice, dishonesty, unfairness, bias, legal problems",
    "The Hanged Man reversed: Delays, resistance to change, indecision, stagnation, avoidance",
    "Death reversed: Inability to move on, fear of change, stagnation, resistance, clinging to the past",
    "Temperance reversed: Imbalance, excess, lack of moderation, self-destructive behavior, disharmony",
    "The Devil reversed: Release from bondage, breaking free, overcoming addiction, enlightenment, liberation",
    "The Tower reversed: Avoidance of disaster, fear of change, delaying the inevitable, playing it safe, clinging to false security",
    "The Star reversed: Lack of faith, despair, discouragement, disillusionment, insecurity",
    "The Moon reversed: Deception, confusion, illusion, fear, anxiety",
    "The Sun reversed: Inner child issues, lack of clarity, depression, disappointment, low energy",
    "Judgement reversed: Self-doubt, fear of change, lack of self-awareness, procrastination, avoidance",
    "The World reversed: Incomplete goals, lack of closure, lack of fulfillment, feeling stuck, lack of growth",

    "Ace of Wands: Reversed: Delays, false starts, lack of direction, blocked creativity, fear of taking action",
    "Two of Wands: Reversed: Lack of planning, poor decisions, impatience, disorganization, fear of unknown",
    "Three of Wands: Reversed: Setbacks, lack of foresight, delays, unexpected obstacles, lack of preparation",
    "Four of Wands: Reversed: Lack of stability, impermanence, conflict at home, misaligned values, disconnection",
    "Five of Wands: Reversed: Conflict resolution, inner conflict, disagreement, competition, scattered focus",
    "Six of Wands: Reversed: Lack of recognition, self-doubt, failure, betrayal, negative feedback",
    "Seven of Wands: Reversed: Defensive posture, giving up too soon, overwhelmed, backing down, insecurity",
    "Eight of Wands: Reversed: Miscommunication, delays, lack of momentum, lost opportunities, haste without direction",
    "Nine of Wands: Reversed: Exhaustion, giving up, avoidance, defensive stance, paranoia",
    "Ten of Wands: Reversed: Burdens, responsibility overload, burnt out, resentment, inability to delegate",
    "Page of Wands: Reversed: Lack of creativity, bad news, delays, lack of passion, unrealistic expectations",
    "Knight of Wands: Reversed: Hasty decisions, impulsiveness, recklessness, anger, aggression",
    "Queen of Wands: Reversed: Selfishness, jealousy, insecurities, co-dependence, manipulation",
    "King of Wands: Reversed: Impulsiveness, domination, impatience, overbearing, poor leadership skills",

    "Ace of Cups: Reversed: Blocked creativity, emptiness, emotional imbalance, lost opportunities, lack of love",
    "Two of Cups: Reversed: Breakup, imbalanced relationships, misunderstanding, lack of harmony, codependency",
    "Three of Cups: Reversed: Overindulgence, excessive partying, gossip, false friendships, shallow connections",
    "Four of Cups: Reversed: Boredom, apathy, missed opportunities, lack of gratitude, self-pity",
    "Five of Cups: Reversed: Acceptance, moving on, forgiveness, finding silver linings, letting go",
    "Six of Cups: Reversed: Stuck in the past, unrealistic nostalgia, inability to move on, naivety, denial",
    "Seven of Cups: Reversed: Lack of choices, being stuck, over-fantasizing, confusion, escapism",
    "Eight of Cups: Reversed: Fear of change, emotional burnout, avoidance, indecision, self-doubt",
    "Nine of Cups: Reversed: Discontent, greed, materialism, excessive pride, emotional imbalance",
    "Ten of Cups: Reversed: Dysfunctional family, broken relationships, emotional disconnect, lack of harmony, unfulfillment",
    "Page of Cups: Reversed: Insecurity, creative blocks, bad news, emotional immaturity, low self-esteem",
    "Knight of Cups: Reversed: Mood swings, emotional instability, unrealistic expectations, deceit, unreliability",
    "Queen of Cups: Reversed: Emotional manipulation, co-dependency, emotional insecurity, mood swings, emotional suppression",
    "King of Cups: Reversed: Emotional manipulation, moodiness, emotional volatility, lack of empathy, emotional repression",

    "Ace of Swords reversed: Mental blockages, confusion, lack of clarity, self-doubt, chaos",
    "Two of Swords reversed: Indecision, confusion, information overload, stalemate, impasse",
    "Three of Swords reversed: Releasing pain, forgiveness, moving on, denial, repression",
    "Four of Swords reversed: Restlessness, burnout, lack of progress, fatigue, overexertion",
    "Five of Swords reversed: Self-acceptance, forgiveness, making amends, making peace, moving on",
    "Six of Swords reversed: Stuck in the past, unable to move on, emotional baggage, unfinished business, taking on too much",
    "Seven of Swords reversed: Guilt, shame, regret, caught in the act, getting caught",
    "Eight of Swords reversed: Freedom, release, taking action, empowerment, breaking free",
    "Nine of Swords reversed: Inner turmoil, anxiety, nightmares, depression, sleeplessness",
    "Ten of Swords reversed: Recovery, healing, moving on, accepting the end, release",
    "Page of Swords reversed: Manipulation, verbal abuse, dishonesty, sneakiness, bad news",
    "Knight of Swords reversed: Impulsiveness, recklessness, aggression, haste, ruthlessness",
    "Queen of Swords reversed: Coldness, bitterness, gossip, deceit, spite",
    "King of Swords reversed: Manipulation, tyranny, abuse of power, cold-heartedness, lack of mercy",

    "Ace of Pentacles reversed: Lost opportunity, lack of planning, greed, indulgence, living beyond means",
    "Two of Pentacles reversed: Overcommitted, disorganization, financial disarray, indecision, imbalance",
    "Three of Pentacles reversed: Delays, lack of teamwork, disorganization, misunderstanding, miscommunication",
    "Four of Pentacles reversed: Control issues, financial loss, greed, miserliness, possessiveness",
    "Five of Pentacles reversed: Recovery, spiritual poverty, material gain, hopelessness, isolation",
    "Six of Pentacles reversed: Selfishness, uncharitable, unfairness, taking without giving, being taken advantage of",
    "Seven of Pentacles reversed: Impatience, lack of long-term vision, impulsive decisions, giving up too soon, unrealized goals",
    "Eight of Pentacles reversed: Perfectionism, lacking skills, uninspired, repetitive work, laziness",
    "Nine of Pentacles reversed: Materialism, greed, over-independence, loss of independence, superficiality",
    "Ten of Pentacles reversed: Financial failure, greed, loneliness, family conflict, break in tradition",
    "Page of Pentacles reversed: Lack of commitment, unrealistic goals, laziness, scattered energy, lack of progress",
    "Knight of Pentacles reversed: Laziness, obsessiveness, feeling stuck, being weighed down, inaction",
    "Queen of Pentacles reversed: Self-centeredness, jealousy, smothering, materialism, ignoring responsibilities",
    "King of Pentacles reversed: Greed, obsession with material wealth, obsession with work, indulgence, irresponsibility",

];

var imagee = document.getElementById("img1");
imagee.style.display = "none";
var imagee = document.getElementById("img2");
imagee.style.display = "none";
var imagee = document.getElementById("img3");
imagee.style.display = "none";

document.getElementById('button').addEventListener('click', function() {

    const randomNumbers = [];
    let n;

    // Generate the first random number
    while (randomNumbers.length < 1) {
        n = Math.floor(Math.random() * 156);
        randomNumbers.push(n);
    }

    // Generate the second and third random numbers, with additional constraints
    while (randomNumbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 156);

        if (!randomNumbers.includes(randomNumber)) {
            if (randomNumbers[0] === n && n < 78 && randomNumber === n + 78) {
                continue;
            } else if (randomNumbers[0] === n && n >= 78 && randomNumber === n - 78) {
                continue;
            } else if (randomNumbers[1] === n && n < 78 && randomNumber === n + 78) {
                continue;
            } else if (randomNumbers[1] === n && n >= 78 && randomNumber === n - 78) {
                continue;
            } else {
                randomNumbers.push(randomNumber);
            }
        }
    }

    var N1 = randomNumbers[0];
    var N2 = randomNumbers[1];
    var N3 = randomNumbers[2];

    //console.log(cardNames[N1],cardNames[N2],cardNames[N3]);



    if (N1 >= 78) {
        x = N1 - 78
        console.log(x);
        console.log(N1);
        console.log(cardNames[x]);
        document.getElementById('text1').textContent = cardMeanings[N1];
        var image1 = document.getElementById("img1");
        image1.style.display = "block";
        image1.src = x + ".jpg";
        image1.style.transform = "scaleY(-1)";
    } else {
        var image = document.getElementById("img1");
        image.style.display = "block";
        image.src = N1 + ".jpg";
        image.style.transform = "none";
        document.getElementById('text1').textContent = cardMeanings[N1];
    }

    if (N2 >= 78) {
        y = N2 - 78
        document.getElementById('text2').textContent = cardMeanings[N2];
        var image2 = document.getElementById("img2");
        image2.style.display = "block";
        image2.src = y + ".jpg";
        image2.style.transform = "scaleY(-1)";
    } else {
        var image = document.getElementById("img2");
        image.style.display = "block";
        image.src = N2 + ".jpg";
        image.style.transform = "none";
        document.getElementById('text2').textContent = cardMeanings[N2];
    }


    if (N3 >= 78) {
        z = N3 - 78
        document.getElementById('text3').textContent = cardMeanings[N3];
        var image3 = document.getElementById("img3");
        image3.style.display = "block";
        image3.src = z + ".jpg";
        image3.style.transform = "scaleY(-1)";
    } else {
        var image = document.getElementById("img3");
        image.style.display = "block";
        image.src = N3 + ".jpg";
        image.style.transform = "none";
        document.getElementById('text3').textContent = cardMeanings[N3];
    }



});