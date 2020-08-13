function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}
BoardMember.prototype.veto = function(){ return "No, I must disagree"};
BoardMember.prototype.approve = function(){ return "You can do that!"};
BoardMember.prototype.doCharity = function(){ return "I like to help people."};
BoardMember.prototype.releasePressStatement(){ return "You will see great things from Scuber."};
