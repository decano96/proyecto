

// Cofla

dineroCofla = prompt("¿cuanto dinero tiene Cofla?");
dineroRoberto = prompt("¿cuanto dinero tiene Roberto?");
dineroPedro = prompt("¿cuanto dinero tiene Pedro?"); 

dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Cofla; comprate el helado de agua");
	alert("Y te sobran " + (dineroCofla - 0.6))
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("Cofla; comprate el helado de crema");
	alert("Y te sobran " + (dineroCofla - 1.6))
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("Cofla; comprate el helado de heladito");
	alert("Y te sobran " + (dineroCofla - 1.7))
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("Cofla; comprate el helado de helito");
	alert("Y te sobran " + (dineroCofla - 1.8))
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("Cofla; comprate el helado de helaso");
	alert("Y te sobran " + (dineroCofla - 2.9))
} 

else if (dineroCofla >= 2.9) {
	alert("Cofla; comprate el helado con confites o el pote de 1/4 kl");
	alert("Y te sobran " + (dineroCofla - 2.9))
} 

else  {
	alert("Cofla; lo siento inserte coin");
}



// roberto



dineroRoberto = prompt("cuanto dinero tiene Roberto");

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("Roberto; comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("Roberto; comprate el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("Roberto; comprate el helado de heladito");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("Roberto; comprate el helado de helito");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("Roberto; comprate el helado de helaso");
} 

else if (dineroRoberto >= 2.9) {
	alert("Roberto; comprate el helado con confites o el pote de 1/4 kl");
} 

else  {
	alert("Roberto, lo siento inserte coin");
}



// PEDRO


dineroPedro = prompt("cuanto dinero tiene Pedro");

if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de heladito");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de helito");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de helaso");
} 

else if (dineroPedro >= 2.9) {
	alert("pedro; comprate el helado con confites o el pote de 1/4 kl");
} 

else  {
	alert("Pedro; lo siento inserte coin");
}

