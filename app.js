function onInit() {
    getYouTubeAnalytics();
}
onInit ();
function toggleNavigation() {
  const navigation = document.getElementById('mainNavigation');

  if (navigation.classList.contains('isExpanded')) 
  {
      navigation.classList.remove ('isExpanded');
      console.log('1');
  } else {
      navigation.classList.add('isExpanded')
      console.log('2');
  }
}

async function getYouTubeAnalytics() {
   const response = await fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=pizzapokerguy87&key=AIzaSyAoLEQd78ITS4e5S1QboQxeLhvC8JQljdg");
   const json = await response.json();
   console.log(json); 
}