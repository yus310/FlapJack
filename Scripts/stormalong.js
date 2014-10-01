var StormAlong = StormAlong || {};

(function () {
    "use strict";

    StormAlong.FlapJack;
    StormAlong.Knuckles;
    StormAlong.Bubbie;

    StormAlong.FlapJack={};
    StormAlong.Knuckles={};
    StormAlong.Bubbie={};

    StormAlong.VogResponse;
    StormAlong.VogResponse={};
    StormAlong.VogResponse.App;
    StormAlong.VogResponse.Session;
    StormAlong.VogResponse.Response;
    StormAlong.VogResponse.ResponseCode;
    StormAlong.VogResponse.TTSResponse;
    StormAlong.VogResponse.TTSResponsePath;

    StormAlong.VogResponse.App={};
    StormAlong.VogResponse.Session={};
    StormAlong.VogResponse.Response={};
    StormAlong.VogResponse.ResponseCode={};
    StormAlong.VogResponse.TTSResponse={};
    StormAlong.VogResponse.TTSResponsePath={};

    StormAlong.ActionCode;
    StormAlong.ActionCode={};
    StormAlong.ActionCode.Character;
    StormAlong.ActionCode.Action;
    StormAlong.ActionCode.Expression;
    StormAlong.ActionCode.Delay;
    StormAlong.ActionCode.Duration;

    StormAlong.ActionCode.Character={};
    StormAlong.ActionCode.Action={};
    StormAlong.ActionCode.Expression={};
    StormAlong.ActionCode.Delay={};
    StormAlong.ActionCode.Duration={};

    StormAlong.VogResponse.ParseResponseCode = function (VognitionRetCode) {
        //alert('hello');
        //FlapJack Don't act    0105000000
        //Knuckles go look in the mirror  02,01,00,00,00
        //FlapJack Act Zanny for 10 seconds   0102070010

        //20,01,05,00,00,00
        VognitionRetCode=VognitionRetCode +'';
        var character=VognitionRetCode.substr(2,2);
        var action=VognitionRetCode.substr(4,2);
        var expression=VognitionRetCode.substr(6,2);
        //var delay=VognitionRetCode.substr(10,2);
        //var duration=VognitionRetCode.substring(11,2);
        var delay=0;

    StormAlong.ActionCode.Character =parseInt(character,10); 
    StormAlong.ActionCode.Action =parseInt(action,10); 
    StormAlong.ActionCode.Expression =parseInt(expression,10); 
    StormAlong.ActionCode.Delay =parseInt(delay,10); 
    StormAlong.ActionCode.Duration =0; 


    }

    StormAlong.Enumerations;
    StormAlong.Enumerations={};
    StormAlong.Enumerations.Actor;
    StormAlong.Enumerations.Actor = {
        'FlapJack':1,
        'Knuckles':2,
        'Bubble':3,
        'Everyone':4
    }

    StormAlong.Enumerations.Action;
    StormAlong.Enumerations.Action= {
        'ActorAction':1,
        'Act':2,
        'ReAct':3,
        'Stop':4,
        'ClearReaction':5
    }

    StormAlong.Enumerations.Expression;
    StormAlong.Enumerations.Expression = {
        'Happy' :  1,
        'Sad' : 2,
        'Excited' :  3,
        'Scared' :  4,
        'Crazy' :  5,
        'Wacky' :  6,
        'Zanny' :  7        
    }

    //FlapJack Section
  //StormAlong.FlapJack.Expression = StormAlong.FlapJack.Expression || {};
   // StormAlong.FlapJack.Expression = StormAlong.Enumerations.Expression;

    StormAlong.CharacterCommand=function() {
      switch (StormAlong.ActionCode.Character) {
        case StormAlong.Enumerations.Actor.FlapJack:
          StormAlong.FlapJack.ChangeExpression(
              StormAlong.ActionCode.Expression, 
              StormAlong.ActionCode.Delay, 
              StormAlong.ActionCode.Duration 
          );

          break;
        case StormAlong.Enumerations.Actor.Knuckles:
          StormAlong.Knuckles.ChangeExpression(
              StormAlong.ActionCode.Expression, 
              StormAlong.ActionCode.Delay, 
              StormAlong.ActionCode.Duration 
          );
          
          break;
        case StormAlong.Enumerations.Actor.Bubbie:
          
          break;
        case StormAlong.Enumerations.Actor.Everyone:
          StormAlong.FlapJack.ChangeExpression(
              StormAlong.ActionCode.Expression, 
              StormAlong.ActionCode.Delay, 
              StormAlong.ActionCode.Duration 
                );
          StormAlong.Knuckles.ChangeExpression(
              StormAlong.ActionCode.Expression, 
              StormAlong.ActionCode.Delay, 
              StormAlong.ActionCode.Duration 
              );

          break;
        default:
      }



    }



    StormAlong.FlapJack.ChangeExpression = function(ExpressionCode,Delay,Duration) {
      switch (ExpressionCode) {
        case StormAlong.Enumerations.Expression.Crazy:
          break;
        case StormAlong.Enumerations.Expression.Excited:
          $("#flapjack_image").attr('src', "./Images/FlapJack/flapjack_laughs.gif").delay(Delay*1000);
          break;
        case StormAlong.Enumerations.Expression.Happy:
          $("#flapjack_image").attr('src', "./Images/FlapJack/flapjack_happy.gif").delay(Delay*1000);

          break;
        case StormAlong.Enumerations.Expression.Sad:
            $("#flapjack_image").attr('src', "./Images/FlapJack/flapjack_upset.gif").delay(Delay*1000);
            break;
        case StormAlong.Enumerations.Expression.Scared:
        case StormAlong.Enumerations.Expression.Wacky:
        case StormAlong.Enumerations.Expression.Zanny:
        default:
          $("#flapjack_image").attr('src', "./Images/FlapJack/flapjack_walking.gif").delay(Delay*1000);
      }
    }   

    //Knuckles Section
    StormAlong.Knuckles.ChangeExpression = function(ExpressionCode,Delay,Duration) {
      switch (ExpressionCode) {
        case StormAlong.Enumerations.Expression.Crazy:
          $("#knuckles_image").attr('src', "./Images/Knuckles/flapjack_knucles_dancing.gif").delay(Delay*1000);
          break;
        case StormAlong.Enumerations.Expression.Excited:
          $("#knuckles_image").attr('src', "./Images/Knuckles/knuckles_angry.gif").delay(Delay*1000);
          break;
        case StormAlong.Enumerations.Expression.Happy:
          $("#knuckles_image").attr('src', "./Images/Knuckles/flapjack_knucles_dancing.gif").delay(Delay*1000);

          break;
        case StormAlong.Enumerations.Expression.Sad:
          $("#knuckles_image").attr('src', "./Images/Knuckles/knuckles_crying.gif").delay(Delay*1000);

          break;
        case StormAlong.Enumerations.Expression.Scared:
          $("#knuckles_image").attr('src', "./Images/Knuckles/knuckles_smirking.gif").delay(Delay*1000);
          break;
        case StormAlong.Enumerations.Expression.Wacky:
        case StormAlong.Enumerations.Expression.Zanny:
        default:
          $("#knuckles_image").attr('src', "./Images/Knuckles/knuckles_lookinmirror.gif").delay(Delay*1000);
      }
    }   

}());