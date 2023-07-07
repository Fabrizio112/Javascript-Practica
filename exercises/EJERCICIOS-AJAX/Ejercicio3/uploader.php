<?php
if(isset($_FILES["file"])){
    $name=$_FILES["file"]["name"];
    $file=$_FILES["file"]["tmp_name"];
    $error=$_FILES["file"]["error"];
    $destination="files/$name";//Esta es una ruta de archivos , osea donde va a guardar los archivos que se suban
    $upload=move_uploaded_file($file,$destination);
    if($upload){
        $res=array(
            "err"=> false,
            "status"=>http_response_code(200),
            "statusText"=>"Archivo $name subido con exito",
            "files"=>$_FILES["file"]
        );
    }else{
        $res=array(
            "err"=> true,
            "status"=>http_response_code(400),
            "statusText"=>"Error al subir el archivo $name",
            "files"=>$_FILES["file"]
        );
    }
    echo json_encode($res);
}