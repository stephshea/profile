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

