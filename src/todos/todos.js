//This is where the controllers live
export default function($scope){
	let params = {
		createHasInput: false
	}; 
	$scope.todos = [
	{
		task: "do dishes",
		isCompleted: false,
		isEditing: false
	},
	{
		task: "walk the do,g",
		isCompleted: true,
		isEditing: false
	}
	];

	$scope.onCompletedClick = function(todo){
		console.log("onCompletedClick got called!");
		todo.isCompleted = !todo.isCompleted;
	};

	$scope.createTask = function(){
		console.log("creaTask got called!")
		params.createHasInput = false;
		$scope.createTaskInput = '';
	};

	$scope.onEditClick = function(todo){
		todo.isEditing = true;
	};

	$scope.$watch('createTaskInput', function(val){
		if(!val && params.createHasInput){
			$scope.todos.pop();
			params.createHasInput = false;
		}
		else if(val && !params.createHasInput){
			$scope.todos.push({task: val, isCompleted: false});
			params.createHasInput = true;
		}else if(val && params.createHasInput){
			$scope.todos[$scope.todos.length - 1].task = val; //set the previous todo task to val
		}
		
	});

}