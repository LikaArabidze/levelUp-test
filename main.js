/*თქვენს დაწერილ ფუნქციას გადმოეცემა შემდეგი პარამეტრები:
jewels (string) ასახავს ძვირფას ქვებს;
stones (string) ასახავს ქვებს, რომლებიც თქვენ გეკუთვნით;
გადმოცემული სტრინგების ყოველი ასო აღნიშნავს ინდივიდუალურ ქვას, ყოველი
განსხვავებული ასო აღნიშნავს ქვის ტიპს (მაგ. a, A, b, B, c ...).
თქვენი მიზანია დაწეროთ ფუნქცია, რომელიც მიიღებს პარამეტრებად ამ ორ სტრინგს
(jewels, stones) და დაითვლის ამ ქვებში, რომლებიც თქვენ გეკუთვნით (ანუ stones),
რამდენი ძვირფასი ქვა არის.
var numJewelsInStones = function(jewels, stones) {
//თქვენი კოდი უნდა დაწეროთ აქ
};
მაგ. 1
თუ jewels = "aA", stones = "aAAbbbb"
მაშინ თქვენმა დაწერილმა ფუნქციამ უნდა დააბრუნოს 3
ახსნა: ძვირფასი ქვები ამ შემთხვევაში არის ‘a’ და ‘A’. შესაბამისად, თქვენს ქვებში ‘a’
და ‘A’ გვხვდება სამჯერ ("aAAbbbb").
მაგ. 2
თუ jewels = "x", stones = "XX"
მაშინ თქვენმა დაწერილმა ფუნქციამ უნდა დააბრუნოს 0
ახნსა: ძვირფასი ქვა ამ შემთხვევაში არის მხოლოდ ‘x’ თქვენ კი გაქვთ მხოლოდ
ორიცალი ‘X’.*/

var jewels='aA';
var stones='aAABBBB';

var numJewelsInStones= function(jewels,stones){
    var count = 0;
    for(let i in jewels) {
        stones.includes(jewels[i]) ? count++ : false;
    }
    return count;

}

console.log(numJewelsInStones(jewels,stones));

/*თქვენს დაწერილ ფუნქციას პარამეტრად გადმოეცემა s სტრინგი, რომელიც შედგება
შემდეგი სიმბოლოებისგან: '(', ')', '{', '}', '[' და']'
თქვენმა დაწერილმა ფუნქციამ უნდა დააბრუნოს მიღებული სტრინგი ვალიდური
არის თუ არა.
სტრინგი ვალიდურია იმ შემთხვევაში თუ:
a. ყველა გახსნილი ფრჩხილი ‘(‘, ‘{‘, ‘[‘ იხურება შესაბამისი დამხურავი
ფრჩხილით ‘)’, ‘}’, ‘]’
b. გახსნილი ფრჩხილები უნდა დაიხუროს სწორი თანმიმდევრობით.
მაგ. სწორია - ( { } )
არასწორია ( { ) }
var isValid = function(s) {
//თქვენი კოდი უნდა დაწეროთ აქ
};
მაგ. 1
Input: s = "()"
Output: true
მაგ. 2:
Input: s = "()[]{}"
Output: true
მაგ. 3:
Input: s = "(]"
Output: false */




function isValid(s)
{
    let stack = [];
    for(let i = 0; i < s.length; i++)
    {
        let x = s[i];
  
        if (x == '(' || x == '[' || x == '{')
        {
        stack.push(x);
        continue;
        }
        if (stack.length == 0)
            return false;
              
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
  
    return (stack.length == 0);
}
  
let s = "([{}])";
  
if (isValid(s))
    document.write("input:" + s + " output: true"
    
    );
else
    document.write("input:" + s + " output: false");

