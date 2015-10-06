tacoWars.controller('GamesCtrl', function GamesCtrl($scope, TacosFactory) {

  $scope.newGame = function() {
    $scope.cash = 2000;
    $scope.loan = 2000;
    $scope.bank = 0;
    $scope.tacos = TacosFactory.tacos;
    $scope.interestRate = 1.1;
    $scope.dayCount = 1;
    $scope.currentDayInventory = [];
    $scope.playerInventory = [];
  };

  function nextDay() {
    //Increases loan amount by the interest rate
    $scope.loan *= $scope.interestRate;

    //Increases day count by one
    $scope.dayCount++;

    //Sets the prices for the day
    setPrices();

    //Sets the available taco meats for the day
    setCurrentDayInventory();

    //After day 5, there is a 20% chance of an "event" happening
    if($scope.dayCount > 5) {
      if(Math.random() < 0.2) {
        $scope.dayEvent = setDayEvent();
      };
    };
    //Ends game after 30 days.
    if($scope.dayCount > 30) {
      return true;
    };
  };

  function setCurrentDayInventory() {
    $scope.currentDayInventory = [];
    //Sets the available tacos for each day.  Each meat has 75% chance of being availble
    $scope.tacos.forEach(function(taco) {
      if(Math.random() < 0.75) {
        $scope.currentDayInventory.push(taco);
      };
    });
  }

  function setPrices() {
    //Sets the day's prices for each taco meat, with a random price between the tacos max and min prices
    $scope.tacos.forEach(function(taco) {
      $scope.tacos.taco.currentPrice = Math.floor(Math.random() * (taco.maxPrice - taco.minPrice + 1)) + taco.minPrice;
    });
  };

  function setDayEvent() {
    //Sets the day's random event.  Each even has an equally weighted chance of happening.
    var randomNum = Math.floor(Math.random() * 11) + 1;
    if(randomNum == 1) {
      //Sets the price of pollo to a random number with 10 of pollo's minimum price.
      $scope.tacos[1].currentPrice = Math.floor(Math.random() * 10) + $scope.tacos[1].minPrice;
      return "A rival truck scored some cheap chicken! Pollo prices have bottomed out!";
    } else if(randomNum == 2) {
      //Sets the price of carnitas to a random number within 20 of it's maximum price, al pastor to within 30 of it's max, and chorizo within 100 of it's max.
      $scope.tacos[2].currentPrice = Math.floor(Math.random() * 20) + ($scope.tacos[2].maxPrice - 20);
      $scope.tacos[3].currentPrice = Math.floor(Math.random() * 30) + ($scope.tacos[3].maxPrice - 30);
      $scope.tacos[5].currentPrice = Math.floor(Math.random() * 100) + ($scope.tacos[5].maxPrice - 100);
      return "The latest shipment of pork was hijacked! Carnitas, Chorizo, and Al Pastor prices have skyrocketed!";
    } else if(randomNum == 3) {
      //Sets the price of lengua to a random number within 300 of it's max price.
      $scope.tacos[7].currentPrice = Math.floor(Math.random() * 300) + ($scope.tacos[7].maxPrice - 300);
      return "Lengua is named is the tastiest taco meat by Underground Hipster Magazine.  Demand has soared!";
    } else if(randomNum == 4) {
      //Sets the price of camarones to a random number within 500 of it's minimum price.
      $scope.tacos[10].currentPrice = Math.floor(Math.random() * 500) + ($scope.tacos[10].minPrice);
      return "Some tainted shrimp at a rival truck has scared people off Camarones.  Prices have plummeted!";
    } else if(randomNum == 5) {
      //Sets the price of carne asada to a random number within 10 of it's minimum price.
      $scope.tacos[0].currentPrice = Math.floor(Math.random() * 10) + ($scope.tacos[0].minPrice);
      return "A new supplier of beef has been found! Carne Asada prices have dropped!";
    } else if(randomNum == 6) {
      //Sets the price of pescado to a random number within 500 of it's maximum price, and camarones to within 800 of it's max.
      $scope.tacos[9].currentPrice = Math.floor(Math.random() * 500) + ($scope.tacos[9].maxPrice - 500);
      $scope.tacos[10].currentPrice = Math.floor(Math.random() * 800) + ($scope.tacos[10].maxPrice - 800);
      return "Oil spill at the beach! Pescado and Camarones prices are insanely high!";
    } else if(randomNum == 7) {
      //Sets the price of cabeza to a random number within 750 of it's maximum price, and tripas to within 500 of it's max.
      $scope.tacos[6].currentPrice = Math.floor(Math.random() * 750) + ($scope.tacos[6].maxPrice - 750);
      $scope.tacos[8].currentPrice = Math.floor(Math.random() * 500) + ($scope.tacos[8].maxPrice - 500);
      return "Cops have cracked down on cabeza and tripas sales! Prices have increased with the risk!";
    } else if(randomNum == 8) {
      //Cash is cut in half.
      $scope.cash *= .5;
      return "Cops raided your truck! You had to pay them off with half of your cash!";
    } else if(randomNum == 9) {
      //Each taco in the inventory has its quantity cut in half.
      for(i=0; i<$scope.playerInventory.length; i++) {
          $scope.playerInventory[i].tacoQuantity *= .5;
      };
      return "A rival truck broke into your truck and stole supplies! Half of your inventory is gone!";
    } else if(randomNum == 10) {
      $scope.tacos[0].currentPrice = Math.floor(Math.random() * 15) + $scope.tacos[0].minPrice;
      $scope.tacos[1].currentPrice = Math.floor(Math.random() * 15) + $scope.tacos[1].minPrice;
      $scope.tacos[2].currentPrice = Math.floor(Math.random() * 20) + $scope.tacos[2].minPrice;
      $scope.tacos[3].currentPrice = Math.floor(Math.random() * 30) + $scope.tacos[3].minPrice;
      $scope.tacos[4].currentPrice = Math.floor(Math.random() * 50) + $scope.tacos[4].minPrice;
      $scope.tacos[5].currentPrice = Math.floor(Math.random() * 100) + $scope.tacos[5].minPrice;
      $scope.tacos[6].currentPrice = Math.floor(Math.random() * 500) + $scope.tacos[6].minPrice;
      $scope.tacos[7].currentPrice = Math.floor(Math.random() * 400) + $scope.tacos[7].minPrice;
      $scope.tacos[8].currentPrice = Math.floor(Math.random() * 450) + $scope.tacos[8].minPrice;
      $scope.tacos[9].currentPrice = Math.floor(Math.random() * 200) + $scope.tacos[9].minPrice;
      $scope.tacos[10].currentPrice = Math.floor(Math.random() * 1000) + $scope.tacos[10].minPrice;
      return "Ronald McTrump has increased penalties for people found buying tacos, scaring away the public! Prices across the board have dropped!";
    } else if(randomNum == 11) {
      $scope.tacos[0].currentPrice = Math.floor(Math.random() * 15) + ($scope.tacos[0].maxPrice - 15);
      $scope.tacos[1].currentPrice = Math.floor(Math.random() * 15) + ($scope.tacos[1].maxPrice - 15);
      $scope.tacos[2].currentPrice = Math.floor(Math.random() * 20) + ($scope.tacos[2].maxPrice - 20);
      $scope.tacos[3].currentPrice = Math.floor(Math.random() * 30) + ($scope.tacos[3].maxPrice - 30);
      $scope.tacos[4].currentPrice = Math.floor(Math.random() * 50) + ($scope.tacos[4].maxPrice - 50);
      $scope.tacos[5].currentPrice = Math.floor(Math.random() * 100) + ($scope.tacos[5].maxPrice - 100);
      $scope.tacos[6].currentPrice = Math.floor(Math.random() * 500) + ($scope.tacos[6].maxPrice - 500);
      $scope.tacos[7].currentPrice = Math.floor(Math.random() * 400) + ($scope.tacos[7].maxPrice - 400);
      $scope.tacos[8].currentPrice = Math.floor(Math.random() * 450) + ($scope.tacos[8].maxPrice - 450);
      $scope.tacos[9].currentPrice = Math.floor(Math.random() * 200) + ($scope.tacos[9].maxPrice - 200);
      $scope.tacos[10].currentPrice = Math.floor(Math.random() * 1000) + ($scope.tacos[10].maxPrice - 1000);
      return "A popular celebrity was spotted eating tacos! All taco prices are high!";
    };
  };

  function buyTacos(taco, quantity) {
    //Purchases a certain taco meat in a certain quantity as long as the player has enough cash.
    if((taco.currentPrice * quantity) > $scope.cash) {
      return false;
    } else {
      $scope.playerInventory.push({tacoType: taco.type, tacoPrice: taco.currentPrice, tacoQuantity: quantity});
      $scope.cash -= (taco.currentPrice * quantity);
    };
  };

  function sellTacos(inventoryIndex, saleQuantity) {
    //Sells a certain quantity of a certain taco meat (if the quantity does not exceed the inventory quantity).  The taco object is removed from the inventory array if it's quantity is zero.
    if(saleQuantity > $scope.inventory[inventoryIndex].tacoQuantity) {
      return false;
    } else {
        $scope.cash += ($scope.inventory[inventoryIndex].currentPrice * saleQuantity);
        $scope.inventory[inventoryIndex].tacoQuantity -= saleQuantity;
        if($scope.inventory[inventoryIndex].tacoQuantity == 0) {
          $scope.inventory.splice(inventoryIndex, 1);
        };
      };
    };
  };

  function depositToBank(amount) {
    //Deposits cash into the bank as long as it is a positive number not more than the cash the player has
    if((amount > $scope.cash) || (amount < 0)) {
      return false;
    } else {
      $scope.cash -= amount;
      $scope.bank += amount;
    }
  };

  function withdrawFromBank(amount) {
    //Withdraws funds from the bank and adds them to cash, if the number is positive and not more than the amount in the bank
    if(amount > $scope.bank) || (amount < 0)) {
      return false;
    } else {
      $scope.cash += amount;
      $scope.bank -= amount;
    };
  };

  function payOffLoan(amount) {
    //Reduces cash and loan if the amount is positive and doesn't exceed cash or loan
    if((amount > $scope.cash) || (amount <0) || (amount > $scope.loan)) {
      return false;
    } else {
      $scope.cash -= amount;
      $scope.loan -= amount;
    };
  };

});
