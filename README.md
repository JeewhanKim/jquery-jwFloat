# How use jQuery Floated Navigation Menu plugin
## Description
This is pretty simple jQuery Floating Navigation Menu plugin, which displays "position:fixed style"
on web page.

## Requrements
jQuery >= 1.7.2

## Usage
Html:

`<ul id="add_id">
			<li>MENU1</li>
			<li>MENU2</li>
			<li>MENU3</li>
		</ul>`


Before using jQuery pop-up you should place links to pop-up css and jQuery libruary:

    <link rel="stylesheet" href="jwFloat.css">
    <script type="text/javascript" src="jquery-1.10.2.min.js"></script>
 	<script type="text/javascript" src="jwFloat.js"></script>

To show pop-up message you should initilize pop-up plugin:

    <script type="text/javascript">
        $(function(){
          $("#add_id").jwFloat({ 
       			margintop : 200, 
       			width : 100
       		});
        });
    </script>

## Parameters
