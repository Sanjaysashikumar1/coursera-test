var names=new Array();
names[0]="Sanjay";
names[1]="Jay";
names[2]="Jabby";
names[3]="jake";
names[4]="paul";
names[5]="frank";
names[6]="larry wheels";
names[7]="emi";
names[8]="harry";
names[9]="jym";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}