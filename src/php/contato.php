<?php
    if(isset($_POST['submit'])){
        $nome=$_POST['nome'];
        $email=$_POST['email'];
        $siteblog=$_POST['siteblog'];
        $assunto=$_POST['assunto'];
        $mensagem=$_POST['mensagem'];
        
        $to='icaro.ssantos96@gmail.com';
        $subject = 'Form Submission';
        $message="Nome: ".$nome."\n"."Email: ".$email."\n"."Site/Blog: ".$siteblog."\n"."Assunto: ".$assunto."\n"."Mensagem: ".$mensagem;
        
        if(mail($to, $subject, $message, $headers)){
            echo "<h1> Mensagem Enviada! Obrigado". " ".$nome.", Entrarei em contato com você!</h1>";
        }
        else{
            echo "Alguma coisa deu errado!";
        }
    }
        
?>