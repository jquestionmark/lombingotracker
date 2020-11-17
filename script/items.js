var artifact = {
	af_mail: true,
	af_blocks: false,
	af_egg: false,
	af_wheel: false,
	af_anchor: false,
	af_bone: false,
	af_book: false,
	af_bottle: false,
	af_brooch: false,
	af_cane: false,
	af_coral: false,
	af_doll: false,
	af_eye: false,
	af_flame: false,
	af_heart: false,
	af_hook: false,
	af_lamp: false,
	af_medal: false,
	af_mirror: false,
	af_rose: false,
	af_seed: false,
	af_skull: false,
	af_spoon: false,
	af_staff: false,
	af_sword: false,
	af_tablet: false
};


var encyclopedia = {
	en_chara: false,
	en_land: false,
	en_artifact: false,
	en_item: false,
	en_weapon: false,
	en_pet: false,
	en_plant: false,
	en_world: false,
	en_golem: false,
	en_tech: false
};

var du = {
	du_inke: false,
	du_cate: false,
	du_mere: false
};


function hide_section(div_class) {
  var x = document.getElementById(div_class);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
