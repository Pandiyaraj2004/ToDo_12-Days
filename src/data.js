export const topics = ['Basic speaking and self-introduction','Simple sentence formation','Past, present, and future','Asking and answering questions','Everyday conversations','Describing people, places, and experiences','Storytelling in simple English','Speaking without translating from Tamil','Handling unexpected questions','Speaking without long pauses','Long conversations and confidence','Final speaking assessment'];
export const prompts = [
 ['What is your name and where are you from?','What do you enjoy doing?','Why do you want to improve your English?'],
 ['What do you do every morning?','What does your friend like?','How do you spend your evenings?'],
 ['What did you do yesterday?','What are you doing today?','What will you do next year?'],
 ['How would you ask a stranger for directions?','What would you ask a new colleague?','How do you ask someone to repeat something?'],
 ['How would you order breakfast?','How would you book an appointment?','What would you say when returning a product?'],
 ['Describe someone you admire.','Describe your hometown.','Describe your best travel experience.'],
 ['Tell a story about a small mistake.','What happened on your first day at school?','Tell a story with a surprising ending.'],
 ['Describe five objects around you directly in English.','What are you doing right now?','Explain how you make tea without translating.'],
 ['What would you do if you missed a train?','If you could learn any skill, what would it be?','What would you do with an unexpected free day?'],
 ['Explain your ideal daily routine for three minutes.','What makes a good friend?','Explain a hobby without stopping.'],
 ['Tell me about yourself in a job interview.','Discuss a challenge and how you solved it.','Ask follow-up questions about a friend’s plans.'],
 ['Introduce yourself and describe your goals for five minutes.','Tell a past story, discuss today, and explain future plans.','Answer five unfamiliar questions without notes.']
];
export const examples = ['My name is Pandiyaraj. I am learning English so I can express my ideas clearly.','I wake up early. My friend works nearby. We practice together.','Yesterday I practiced. Today I am learning. Tomorrow I will speak with a friend.','Could you tell me where the station is? Could you say that again, please?','I would like a tea, please. Could I book an appointment for tomorrow?','My hometown is lively and welcoming. The streets are busy in the morning.','First I missed the bus. Then I called a friend. Finally we arrived together.','This is a cup. It is warm. I am holding it in my right hand.','Let me think for a moment. I would check the next train and call my friend.','There are three things I enjoy about my routine. First, I have time to read.','One challenge I faced was speaking in a group. I practiced daily and became more comfortable.','Twelve days ago I hesitated often. Now I can explain my ideas with more confidence.'];
export const schedule = [
 ['06:00','06:30','Wake up, freshen up','personal'],['06:30','07:15','Sentence formation','english'],['07:15','08:00','Reading aloud','english'],['08:00','09:00','Bath and get ready','personal'],['09:00','10:00','Breakfast and rest','personal'],['10:00','11:00','Listening and shadowing','english'],['11:00','12:00','Speaking practice','english'],['12:00','13:00','Job searching','jobs'],['13:00','14:00','English conversation','english'],['14:00','14:30','Lunch and break','personal'],['14:30','15:30','Real-life situations','english'],['15:30','16:00','Voice recording and correction','english'],['16:00','17:00','Python coding practice','coding'],['17:00','18:00','Free speaking','english'],['18:00','18:30','Break','personal'],['18:30','19:30','Questions and answers','english'],['19:30','20:30','Confidence training','english'],['20:30','21:30','Dinner and relax','personal'],['21:30','22:00','Prepare for bed and sleep','personal']
].map(([start,end,title,category],id)=>({id,start,end,title,category,required:category!=='personal'}));
export const coding = [
 ['Variables and input/output','Read a name and age, then print a greeting.','Maya, 22 → Hello Maya, you are 22.','Use input(), int(), and an f-string.'],
 ['If/else','Read an integer and say whether it is even or odd.','7 → Odd; 8 → Even','Use the remainder operator %.'],
 ['Loops','Print the first n positive integers and their sum.','4 → 1 2 3 4; Sum: 10','Use range(1, n + 1).'],
 ['Strings','Count vowels in a sentence, ignoring case.','Hello → 2','Loop over text.lower() and check membership in aeiou.'],
 ['Lists and duplicates','Remove duplicate numbers while keeping the original order.','[3, 1, 3, 2] → [3, 1, 2]','Build a new list and check membership.'],
 ['Functions','Write a function that returns the largest of three numbers.','largest(4, 9, 2) → 9','Return a value; test negatives and equal numbers.'],
 ['Dictionaries and sets','Count word frequencies and show the number of unique words.','hi hi there → {hi: 2, there: 1}; unique: 2','Split the sentence; use a dictionary counter and a set.'],
 ['Palindrome and reverse string','Reverse a string and check whether it is a palindrome.','level → level, True; cat → tac, False','Compare the original with text[::-1].'],
 ['Fibonacci and prime numbers','Print n Fibonacci terms and check whether n is prime.','5 → 0 1 1 2 3; prime: True','Update a,b together; check divisors and handle n < 2.'],
 ['Sorting and maximum values','Sort a list and find its maximum without max().','[4, 1, 8] → [1, 4, 8]; maximum: 8','Track the largest value while iterating. Handle an empty list.'],
 ['Three easy problems','Solve: sum digits, count words, and find the smallest number.','123 → 6; hello world → 2; [3,1,2] → 1','Solve each separately and test two edge cases each.'],
 ['Independent coding practice','Build a command-line word-frequency tool without copying a solution.','we learn we speak → we:2, learn:1, speak:1','Plan inputs, processing, and outputs. Add three tests.']
];
export function exercise(day,task){
 const i=day-1, p=prompts[i], example=examples[i];
 const actions={1:['Create 12 short sentences about today’s topic. Say each aloud twice.','12 sentences, spoken twice'],2:['Read the example aloud, then expand it into an 80-word paragraph. Read three times with clear pauses.','3 readings of your paragraph'],5:['Listen to an English clip on today’s topic or use Listen to Example. Repeat one sentence at a time, matching rhythm.','Shadow 10 sentences, 3 repetitions each'],6:['Answer each question without reading your answer. Repeat with fewer pauses.','3 answers of at least 60 seconds'],8:['Ask a friend these questions and respond to their follow-ups. If alone, play both roles aloud.','1 conversation of at least 10 minutes'],10:['Create a role-play using today’s questions. Change the setting to a workplace, shop, or phone call.','3 role-plays of 2 minutes'],11:['Record yourself on your phone or computer. Listen privately, identify three unclear phrases, and say them again.','1 recording, 3 corrections, 1 new attempt'],13:['Choose one question. Speak freely and use simple words when you get stuck.','Speak continuously for '+Math.min(5,Math.ceil(day/3))+' minutes'],15:['Answer the three questions, then invent seven follow-up questions.','10 questions answered aloud'],16:['Stand tall, speak clearly, and repeat your strongest answer. End by naming one improvement.','3 confident attempts and 1 improvement noted']};
 if(task.category==='coding')return {instruction:coding[i][1],goal:'Solve the problem and test at least 3 inputs.',example:coding[i][2],hint:coding[i][3],questions:[]};
 if(task.category==='jobs')return {instruction:'Find relevant roles, tailor your resume, and record applications in Job Tracker.',goal:'Review 3 roles and apply to suitable opportunities.',questions:[],example:'Track the company, role, link, date, and next step.'};
 if(task.category==='personal')return {instruction:'Take care of yourself. This activity is optional and does not affect daily completion.',goal:'Rest and return refreshed.',questions:[],example:''};
 return {instruction:actions[task.id][0],goal:actions[task.id][1],questions:p,example};
}
export const dayDate = day => new Date(Date.UTC(2026,9,23+day)).toISOString().slice(0,10);
export const dateLabel = day => new Date(dayDate(day)+'T00:00:00Z').toLocaleDateString('en-IN',{month:'short',day:'numeric',timeZone:'UTC'});
export function istDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
export function currentDay(now=new Date()){return Math.floor((Date.parse(istDate(now)+'T00:00:00Z')-Date.parse('2026-10-24T00:00:00Z'))/86400000)+1;}
export const key=(day,id)=>`${day}:${id}`;
export const required=schedule.filter(t=>t.required);
export function dayStats(state,day){const done=required.filter(t=>state.tasks[key(day,t.id)]?.done).length;return {done,total:required.length,percent:Math.round(done/required.length*100),complete:done===required.length};}
export function streaks(state,today){let longest=0,run=0;for(let d=1;d<=Math.min(today,12);d++){run=dayStats(state,d).complete?run+1:0;longest=Math.max(longest,run);}let end=Math.min(today,12);if(end>0&&!dayStats(state,end).complete)end--;let current=0;for(let d=end;d>=1&&dayStats(state,d).complete;d--)current++;return {current:today>13?0:current,longest};}
export const fresh=()=>({version:1,tasks:{},journals:{},jobs:[],reflection:'',name:'',theme:'light'});
export function validateBackup(data){
 if(!data||data.version!==1||!data.tasks||Array.isArray(data.tasks)||typeof data.tasks!=='object'||!data.journals||Array.isArray(data.journals)||typeof data.journals!=='object'||!Array.isArray(data.jobs))throw Error('This is not a SpeakUp backup.');
 for(const [k,t] of Object.entries(data.tasks)){if(!/^(?:[1-9]|1[0-2]):(?:[0-9]|1[0-8])$/.test(k)||!t||typeof t!=='object'||('done'in t&&typeof t.done!=='boolean')||('seconds'in t&&(!Number.isFinite(t.seconds)||t.seconds<0))||('notes'in t&&typeof t.notes!=='string')||('completedAt'in t&&t.completedAt!==null&&typeof t.completedAt!=='string'))throw Error('Invalid task data.');}
 for(const [d,j] of Object.entries(data.journals)){if(!/^(?:[1-9]|1[0-2])$/.test(d)||!j||typeof j!=='object')throw Error('Invalid journal.');for(const [k,v]of Object.entries(j)){if(['confidence','duration','conversations'].includes(k)){if(!Number.isFinite(v)||v<0||(k==='confidence'&&v>5))throw Error('Invalid progress value.');}else if(typeof v!=='string')throw Error('Invalid journal text.');}}
 for(const j of data.jobs){if(!j||['id','company','role','link','date','status','notes'].some(k=>typeof j[k]!=='string')||!['Applied','Interview','Rejected','Offer'].includes(j.status))throw Error('Invalid application.');}
 if(['name','reflection','theme'].some(k=>k in data&&typeof data[k]!=='string'))throw Error('Invalid preferences.');
 return {...fresh(),...data};
}
