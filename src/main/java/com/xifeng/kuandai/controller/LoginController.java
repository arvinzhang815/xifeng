package com.xifeng.kuandai.controller;

import com.xifeng.kuandai.dto.AccountInfo;
import com.xifeng.kuandai.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @author Created by: zhangbingbing
 * @date 2018/8/6
 **/
@Controller
public class LoginController {

    @Autowired
    public AccountService accountService;

    @RequestMapping(value = "/login",produces = {"application/json;charset=UTF-8"} , method = {RequestMethod.POST, RequestMethod.GET})
    public String login(){
        return "/pages/login/login";
    }

    @RequestMapping(value = "/loginPage", method = {RequestMethod.POST, RequestMethod.GET})
    public String login(HttpServletRequest request, HttpSession session) {
        String account = request.getParameter("j_code");
        String password = request.getParameter("j_password");
        System.out.println("你输入的用户名为：" + account);
        System.out.println("你输入的密码为：" + password);
        AccountInfo info = new AccountInfo();
        info.setAccount(account);
        info.setPassword(password);
        String result = "";
        try {
            result = accountService.login(info);
        }catch (Exception e){
            e.printStackTrace();
        }
        session.setAttribute("tname", result);
        if (result == null) {
            return "redirect:/";
        } else {
            return "redirect:/index";
        }
    }

    @RequestMapping(value = "/index", method = {RequestMethod.POST, RequestMethod.GET})
    public String loginindex() {
        return "/pages/home";

    }

}
