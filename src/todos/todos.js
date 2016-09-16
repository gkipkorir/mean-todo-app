export default function($scope){
	$scope.todos = [
	{
		task: "do dishes",
		isCompleted: false
	},
	{
		task: "walk the dog",
		isCompleted: true		
	}
	];
	$scope.onCompletedClick = function(todo){
		console.log("onCompletedClick got called!");
		todo.isCompleted = !todo.isCompleted;
	};
	$scope.$watch('createTaskInput', function(val){
		if(val){
			$scope.todos.push({task: val, isCompleted: false});
		}
		
	});
}