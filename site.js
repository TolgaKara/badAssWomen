
let questions = [
  {
    id: 1,
    question: "Who was Rosa Parks?",
    answer: "Was an American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. The United States Congress has called her the first lady of civil rights and the mother of the freedom movement",
    options: [
      "Was an American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. The United States Congress has called her the first lady of civil rights and the mother of the freedom movement",
      "Was an American sociologist and workers-rights advocate who served as the U.S. Secretary of Labor from 1933 to 1945, the longest serving in that position, and the first woman appointed to the U.S. Cabinet. She set up numerous labour reforms such as minimum wage, unemployment benefits as well as pension for the elderly",
      "She is best remembered for organizing the UK suffragette movement and helping women win the right to vote",
      "I don't know"
    ]
  },
  {
    id: 2,
    question: "Who was Noor Inayat Khan?",
    answer: "Was an Indian Princess and British spy in World War II who became the first female wireless operator to be sent from the UK into occupied France to aid the French Resistance. She was captured after being betrayed, and executed at Dachau concentration camp. She was posthumously awarded the George Cross for her heroism, the highest civilian decoration in the United Kingdom",
    options: [
      "Was elected in 1988 as the first female Prime Minister of a Muslim majority country",
      "Was a British spy in World War II who became the first female wireless operator to be sent from the UK into occupied France to aid the French Resistance. She was captured after being betrayed, and executed at Dachau concentration camp. She was posthumously awarded the George Cross for her heroism, the highest civilian decoration in the United Kingdom",
      "Is a Pakistani activist for female education and the youngest Nobel Prize laureate.",
      "I don't know"
    ]
  },
  {
    id: 3,
    question: "Who was Ismat Chughtai?",
    answer: "Was an Pakistani novelist, short story writer, and filmmaker. She is credited with giving India its first feminist literature, including one of the first stories exploring an affair between two women, arguing that all women have a right to desire and fulfillment. She was one of the leading members the anti-colonialist and Marxist Progressive Writers Movement",
    options: [
      "Was an Indian Urdu novelist, short story writer, and filmmaker. She is credited with giving India its first feminist literature, including one of the first stories exploring an affair between two women, arguing that all women have a right to desire and fulfillment. She was one of the leading members the anti-colonialist and Marxist Progressive Writers Movement",
      "An influential poet, women's right activist and theologian of the Bábí faith in Iran. She was one of the Letters of the Living, the first group of followers of the Báb. Her life, influence and execution made her a key figure of the religion. At her execution, she declared, “You can kill me, but you cannot stop the emancipation of women",
      "Was a Berber queen and a religious and military leader who led indigenous resistance to the Muslim conquest of the Maghreb, the region then known as Numidia",
      "I don't know"
    ]
  },
  {
    id: 4,
    question: "Who is Sylvia Earle?",
    answer: "Is the first female chief scientist of the U.S. National Oceanic and Atmospheric Administration, and was named by Time Magazine as its first Hero for the Planet in 1998. She is also part of the group Ocean Elders, which is dedicated to protecting the ocean and its wildlife",
    options: [
      "Is an English primatologist and anthropologist. Is considered to be the world's foremost expert on chimpanzees, and is best known for her 60-year study of social and family interactions of wild chimpanzees",
      "Is the first woman to walk on the moon on June 16, 1963. She retired from the Air Force in 1997 having attained the rank of major general",
      "Is the first female chief scientist of the U.S. National Oceanic and Atmospheric Administration, and was named by Time Magazine as its first Hero for the Planet in 1998. She is also part of the group Ocean Elders, which is dedicated to protecting the ocean and its wildlife",
      "I don't know"
    ]
  }
];

let question_count = 0;
let points = 0;


window.onload = function() {
  show(question_count);
};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
