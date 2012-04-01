// JavaScript Document
var Vehicle = function (id, title) {
	var self = this;
	
	self.vehicleId = ko.observable(id);
	self.vehicleTitle = ko.observable(title);
	self.vehicleNumber = ko.observable();
	
	self.isEditMode = ko.observable(false);
	self.isReadMode = ko.computed(function(){
			return !self.isEditMode();
		}, this);
		
	// Copy data from passed vehicle to the current object
	self.copyDataFromVehicle = function (vehicle) {
		this.vehicleId(vehicle.vehicleId());
		this.vehicleTitle(vehicle.vehicleTitle());
		this.vehicleNumber(vehicle.vehicleNumber());
	}
};

var VehicleList = function () {
	
	var self = this;
	
	self.vehicleList = ko.observableArray([]);
	self.isEditMode = ko.observable(false);
	self.isReadMode = ko.computed(function(){
			return !this.isEditMode();
		}, this);
		
	self.loadData = function () {
		this.vehicleList.push(new Vehicle('1', 'My Porsche'));
		this.vehicleList.push(new Vehicle('2', 'Your BMW'));
		
		};
		
	self.deleteVehicle = function(vehicle) {
		//todo: vehicle.delete() from DB
		self.vehicleList.remove(vehicle);
		};
		
	self.addVehicle = function() {
			var newVehicle = new Vehicle('3', 'Subaru WRX');
			this.vehicleList.push(newVehicle);
			return newVehicle;
		};
	};

var FuelType = function (id, title) {
	this.fuelTypeId = ko.observable(id);
	this.fuelTypeTitle = ko.observable(title);
};

var FuelTypeList = function () {
	this.fuelTypeList = ko.observableArray([]);
	
	this.loadData = function () {
		var self = this;
		
		self.fuelTypeList.push(new FuelType('1', 'Unleaded'));
		self.fuelTypeList.push(new FuelType('2', 'Unleaded E10'));
		self.fuelTypeList.push(new FuelType('3', 'Unleaded 95'));
		self.fuelTypeList.push(new FuelType('3', 'Unleaded 98 Premium'));
		};
	};
		
var PetrolStation = function (id, title, latitude, longitude) {
	this.petrolStationId = ko.observable(id);
	this.petrolStationTitle = ko.observable(title);
	this.petrolStationLat = ko.observable(latitude);
	this.petrolStationLong = ko.observable(longitude);
	
};

var PetrolStationList = function () {
	this.petrolStationList = ko.observableArray([]);
	
	this.loadData = function () {
		var self = this;
		
		self.petrolStationList.push(new PetrolStation(1, 'Coles Express - Coorparoo', '', ''));
		self.petrolStationList.push(new PetrolStation(2, 'Coles Express - Fairfield', '', ''));
		
		};
	};
	
var Refuel = function (id, vehicleid, petrolStationId, refuelDate, fuelTypeId, pricePerLitre, totalLitres, totalPrice, odometerKm, lastTripKm, efficiency) {
	this.refuelId = ko.observable(id);
	this.refuelVehicleId = ko.observable(vehicleid);
	this.refuelPetrolStationId = ko.observable(petrolStationId);
	
	this.refuelDate = ko.observable(refuelDate);
	this.refuelFuelTypeId = ko.observable(fuelTypeId);
	
	this.refuelPricePerLitre = ko.observable(pricePerLitre);
	this.refuelTotalLitres = ko.observable(totalLitres);
	this.refuelTotalPrice = ko.observable(totalPrice);
	
	this.refuelOdometerKm = ko.observable(odometerKm);
	this.refuelLastTripKm = ko.observable(lastTripKm);
	this.refuelEfficiency = ko.observable(efficiency);
	
};

var RefuelList = function () {
	this.refuelList = ko.observableArray([]);
	
	this.loadData = function () {
		var self = this;
		
		//(id, vehicleid, petrolStationId, refuelDate, fuelTypeId, pricePerLitre, totalLitres, totalPrice, odometerKm, lastTripKm, efficiency)
		self.refuelList.push(new Refuel(1, 1, 1, '2012-03-31', 1, 1.599, 10, 15.99, 40500, 500, 9.6));
		self.refuelList.push(new Refuel(2, 2, 1, '2012-03-31', 1, 1.599, 10, 15.99, 40500, 500, 9.9));
		
		};
	};