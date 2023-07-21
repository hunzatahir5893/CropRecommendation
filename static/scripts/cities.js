var state_arr = new Array("Punjab","Sindh","Khyber Pakhtonnkhwa");
var s_a = new Array();
s_a[0]="";
s_a[1]=" Attock | Bahawalnagar | Bhawalpur | Bhakkar | Chakwal | Chiniot | Dera Ghazi Khan | Faislabad | Gujranwala | Gujrat | Hafizabad | Jhang | Jhelum | Kasur | Khanewal | Khushab | Lahore | Layyah | Lodhran | Mandi Bahauddin | Mianwali | Multan | Muzaffargarh | Nankana Sahib | Narowal | Okara | Pakpattan | Rahim Yar Khan | Rajanpur | Rawalpindi | Sahiwal | Sargodha | Sheikhupura | Sialkot | Toba Tek Singh |  Vehari ";
s_a[2]=" Latifabad | Karachi | Bhirkan | Boriri | Chak | Dadu | Daharki | Daulatpur | Digri |  Garhi Yasin |  Ghotki | Guddu Barrage | Khairpur Mirs | Hyderabad | Jacobabad | Jamshoro | Keti Bandar | Khairpur | Kotri | Mehrabpur | Mirpur Khas | Nasirabad |  	Nawabshah |  	Sehwan Sharif | Sanghar |  Shikarpaur |  Sukkur | Tando Adam Khan | Thatta ";
s_a[3]="Abbottabad | Nowshera | Bannu | Dera Ismail Khan | Hangu | Haripur | Kohat | Kulachi | Mansehra | Mardan | Mingora | Peshawar | Saidu Sharif | Swabi | Timergara | Khanpur ";


function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// 
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
