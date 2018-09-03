function basicTeenager(age) {
 if (age >= 13 && age <= 19) {
   return "You are a teenager!"
 }
}

function teenager(age) {
 if (age >= 13 && age <= 19) {
   return "You are a teenager!"
 } else {
   return "You are not a teenager"
 }
}

function ageChecker(age) {
<<<<<<< HEAD
if (age >= 13 && age <= 19) {
  return "You are a teenager!"
} else if (age <=12) {
  return "You are a kid"
} else {
  return "You are a grownup"
}
=======
  switch (age) {
    case age >= 13 && age <= 19:
      return "You are a teenager!"
      break;
      case age >= 12:
        return "You are a kid"
        break;

    default: 'idk'
  }
>>>>>>> 18a494c1706eeae83ce5730d465db2e3c951de1c
  }


function ternaryTeenager(age) {
return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
switch (age) {
    case 13:
    return "You are a teenager"
    break;
     case 14:
     return "You are a teenager"
     break;
<<<<<<< HEAD
      case 15:
      return "You are a teenager"
      break;
        case 16:
        return "You are a teenager"
        break;
           case 17:
           return "You are a teenager"
           break;
             case 18:
             return "You are a teenager"
             break;
               case 19:
=======
     case 15:
       return "You are a teenager"
       break;
       case 16:
         return "You are a teenager"
         break;
         case 17:
           return "You are a teenager"
           break;
           case 18:
             return "You are a teenager"
             break;
             case 19:
>>>>>>> 18a494c1706eeae83ce5730d465db2e3c951de1c
               return "You are a teenager"
               break;
  default:
    return "You have an age"
}
}
