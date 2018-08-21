var depressed_prompts = ["Biggest Fear.", "Lies.", "Cheating.", "Broken Heart.", "Terrible Days.", "Worst Habbits.", "Smoke, Fog, and Haze.", "Nightmares.", "Lost Relationships.", "Dread.", "Tears.", "Memories.", "Fake people.", "Broken Promises.", "Stress.", "Terror.", "Mistakes.", "Regret.", "Loss.", "Alone."];
var angry_prompts = ["Being Fired.", "Worried.", "Embarrased.", "Frustrated.", "Screaming.", "Evasion.", "Accidents.", "Manipulation.", "Revenge.", "Insults.", "Drama.", "Missing Someone.", "Being Lied To.", "Nosy People.", "Rude.", "Running Out of Toilet Paper.", "Sleepless.", "Narcissistic People", "Bad Vibes.", "Missed Opportunities."];
var calm_prompts = ["Nature.", "Ocean Breeze.", "Strolling in the Park.", "Unbothered.", "Success.", "Peace.", "Favorite Hobby.", "Breathing.", "Friends.", "Positive People.", "Support.", "Movies.", "Relaxation.", "Good Energy.", "Self-Compassion", "Comfort", "Sleep.", "Self-Love.", "Positivity.", "Faith."];
var optimistic_prompts = ["Your Happiness.", "Celebrations.", "Good Vibes.", "Smiles.", "Friendships.", "Open Doors.", "Weekends.", "Good Realationships.", "Favorite Hobbies.", "Hero.", "Nature.", "Vacation.", "Your Bed.", "Flying.", "Positive Outcomes.", "Love.", "Rest.", "Family.", "Food.", "Sunshine."];
var hateful_prompts = ["Hurt.", "Flaws.", "Change.", "Failure.", "Fears.", "Secrets.", "Insecurities.", "Revenge.", "Guilt.", "Tragedy.", "Lost trust.", "Unfair.", "Selfish.", "Greed.", "Ignorance.", "Inferiority.", "Jealousy.", "Unfaithful.", "Unhappy.", "Denial."];
var mysterious_prompts = ["Unseen.", "Secrets.", "Bury.", "Strangers.", "Missing.", "Poison.", "Lonely Island.", "Murders.", "Stolen.", "Lost at Sea.", "Stalker.", "Masks.", "Tunnel.", "Trapped.", "Costumes.", "Fog.", "Shovel.", "Promises.", "Unfamiliar Roads.", "Strange Sounds."];
var loving_prompts = ["Secret Lovers", "The Definition of Love.", "Star Crossed Lovers.", "Relationships.", "Comprimising.", "Love Scenes.", "Vacation.", "Marriage.", "Family Acceptance.", "Honeymoon.", "How they met.", "Shared Goals.", "Dreams.", "Feelings.", "Family.", "Long Distance.", "Anniversaries.", "Emotions.", "Flirtatious.", "Happiness."];
var silly_prompts = ["Secret Life of a Teddy Bear.", "Alien Invasion.", "Zombie Apocalypse.", "Life in Space.", "Flying Cars.", "Ant-Sized Peopls.", "You're a Secret Spy.", "Monsters Under The Bed.", "Superpowers.", "Time-Travel.", "Barney the Dinosaur.", "Car Keys.", "Toilet Covers.", "Magical Trees.", "Santa.", "Create a Country.", "An Asteroid Strikes Earth.", "Cute dragons.", "The Magical Deli Guy.", "Evil Fish."];

function printPrompts(listname){
  var promptStr = ""
  for (i = 0; i < listname.length; i++) {
    //console.log(listname[i])
    promptStr += listname[i] + '<br>';
  }
  //console.log(promptStr)
  document.getElementById("prompts").innerHTML = promptStr;
}
