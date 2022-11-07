	// js正则验证相关字符的意义
	// 1.  /^$/ 这个是个通用的格式。
	// ^ 匹配输入字符串的开始位置；$匹配输入字符串的结束位置
    // 2. 里面输入需要实现的功能。
    // * 匹配前面的子表达式零次或多次；
    // + 匹配前面的子表达式一次或多次；
    // ？匹配前面的子表达式零次或一次；
    // \d  匹配一个数字字符，等价于[0-9]
        window.onload = function(){
        document.getElementById("form").onsubmit = function(){
                return checkUsername() && checkPassword() && checkPassword2() && mailbox() && checkMobilePhone() && imgCode();
        };
            document.getElementById("username").onblur = checkUsername;
            document.getElementById("password").onblur = checkPassword;
            document.getElementById("password2").onblur = checkPassword2;
            document.getElementById("email").onblur = mailbox; 
            document.getElementById("age").onblur = checkage;
        }
        function checkage(){
            var age = document.getElementById("age").value;
            var reg_age = isNaN(x.value) || x.value < 17;
            var flag = reg_age.test(age);
            var s_age = document.getElementById("s_age");
        }
        function checkUsername(){
            //固定六位到十位字符用户名包含大小写字母与数字的组合
            var username = document.getElementById("username").value;

            var flag = reg_username.test(username);
            var s_username = document.getElementById("s_username");
            if(flag){
                s_username.innerHTML = "<img width='35' height='25' src='img/right.png'/>";
                return true;
            }else{
                s_username.innerHTML = "用户名格式有误";
                return false;
            }
            
        }
		
        function checkPassword(){
            //固定六位到十位字符密码包含大小写字母与数字的组合，当然你也可以改变正则方式，详情可见https://www.jb51.net/article/115170.htm
            var password = document.getElementById("password").value;
            var reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
            var flag = reg_password.test(password);
            var s_password = document.getElementById("s_password");
            if(flag){
                s_password.innerHTML = "<img width='35' height='25' src='img/right.png'/>";
                return true;
            }else{
                s_password.innerHTML = "密码格式有误";
                return false;
            }
        }

        function checkPassword2(){
            //与上步的password正则验证一样，加了个密码一致的匹配
            var password2 = document.getElementById("password2").value;
            var reg_password2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
            var flag = reg_password2.test(password2);
            var s_password2 = document.getElementById("s_password2");
            if(flag && password2 == document.getElementById("password").value){
                s_password2.innerHTML = "<img width='35' height='25' src='img/right.png'/>";
                 return true;
            }else{
                s_password2.innerHTML = "密码格式不一致";
                return false;
            }
        }

        function mailbox(){
        //定义正则表达式的变量:邮箱正则邮箱地址 必须由 大小写字母 或 数字 或下划线开头，其后可以跟上任意的 \w字符 和 中划线 加号 英文句号 @ 跟上任意的 \w字符 和 中划线(-) 加号 英文句号(.)
        var email =document.getElementById("email").value; 
        var emailReg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
         var flag = emailReg.test(email);
         var test_email = document.getElementById("test_email");
        if(flag)
        {
             test_email.innerHTML = "<img width='35' height='25' src='img/right.png'/>";
              return true;
        }else{
             test_email.innerHTML = "邮箱格式有误";
              return false;
        }
     }   

        function checkform(){
            //表单总确认
       if(checkUsername() && checkPassword () && checkPassword2() && mailbox() && checkMobilePhone() && imgCode()==true){
        window.alert("恭喜您！注册成功");
        return true;
       }else{
        window.alert("请您核对一下您的注册信息是否有误");
        return false;
       }

    }