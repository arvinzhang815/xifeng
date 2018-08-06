package com.xifeng.kuandai.controller;

import com.xifeng.kuandai.dto.Information;
import com.xifeng.kuandai.service.KuandaiService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Created by: zhangbingbing
 * @date 2018/7/5
 **/
@Controller
public class KuandaiController {

    @Autowired
    private KuandaiService kuandaiService;

    @RequestMapping("/test2")
    public String test2(){
        return "index";
    }

    @ResponseBody
    @RequestMapping(value = "/add", produces = {"application/json;charset=UTF-8"})
    public int addUser(Information user){

        try{
            kuandaiService.insert(user);
        }catch (Exception e){
            e.printStackTrace();
        }
        return 1;
    }

    @RequestMapping(value="/queryByInfo")
    public String getByName(@RequestParam(value = "name",required = false) String name,
                            @RequestParam(value = "telphone",required = false) String telphone,
                            @RequestParam(value = "kuandaiNo",required = false) String kuandaiNo,
                            @RequestParam(value = "address",required = false) String address,
                            @RequestParam(value = "KDAddr",required = false) String KDAddr,
                            @RequestParam(value = "begainDate",required = false) String begainDate,
                            @RequestParam(value = "endDate",required = false) String endDate,
                            @RequestParam(value = "remark",required = false) String remark,
                            Model model){
        List<Information> list = new ArrayList<Information>();
        Information information = new Information();
        if(StringUtils.isNoneBlank(name)){
            information.setName(name);
        }
        if(StringUtils.isNotBlank(telphone)){
            information.setTelphone(telphone);
        }
        if(StringUtils.isNotBlank(kuandaiNo)){
            information.setKuandaiNo(kuandaiNo);
        }
        if(StringUtils.isNotBlank(address)){
            information.setAddress(address);
        }
        if(StringUtils.isNotBlank(KDAddr)){
            information.setKDAddr(KDAddr);
        }
        if(StringUtils.isNotBlank(begainDate)){
            information.setBegainDate(begainDate);
        }
        if(StringUtils.isNotBlank(endDate)){
            information.setEndDate(endDate);
        }
        if(StringUtils.isNotBlank(remark)){
            information.setRemark(remark);
        }
        try {
            list = kuandaiService.queryByInfo(information);
        }catch (Exception e){
            e.printStackTrace();
        }
        // 分页信息
        model.addAttribute("response", list);
        return "/pages/home";
    }
    @RequestMapping(value="/home/page")
    public ModelAndView goHome(){
        System.out.println("go to the home page!");
        ModelAndView mode = new ModelAndView();
        mode.addObject("name", "zhangsan");
        mode.setViewName("index");
        return mode;
    }

    @RequestMapping(value="/home")
    public String home(@RequestParam(value = "path",required = false) String path,
                       Model model){

        System.out.println("redirect to home page!");
        return "index";
    }
    @RequestMapping("/insert")
    public String insert(@RequestParam(value = "name",required = false) String name,
                         @RequestParam(value = "telphone",required = false) String telphone,
                         @RequestParam(value = "kuandaiNo",required = false) String kuandaiNo,
                         @RequestParam(value = "address",required = false) String address,
                         @RequestParam(value = "KDAddr",required = false) String KDAddr,
                         @RequestParam(value = "begainDate",required = false) String begainDate,
                         @RequestParam(value = "endDate",required = false) String endDate,
                         @RequestParam(value = "remark",required = false) String remark,
                         Model model){
        String result = "";
        Information infor = new Information();
        infor.setName(name);
        infor.setTelphone(telphone);
        infor.setAddress(address);
        infor.setKDAddr(KDAddr);
        infor.setBegainDate(begainDate);
        infor.setEndDate(endDate);
        infor.setRemark(remark);
        try {
            kuandaiService.insert(infor);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
    @RequestMapping("/update")
    public String update(@RequestParam(value = "name",required = false) String name,
                         @RequestParam(value = "telphone",required = false) String telphone,
                         @RequestParam(value = "kuandaiNo",required = false) String kuandaiNo,
                         @RequestParam(value = "address",required = false) String address,
                         @RequestParam(value = "KDAddr",required = false) String KDAddr,
                         @RequestParam(value = "begainDate",required = false) String begainDate,
                         @RequestParam(value = "endDate",required = false) String endDate,
                         @RequestParam(value = "remark",required = false) String remark,
                         Model model){
        String result = "";
        Information infor = new Information();
        infor.setName(name);
        infor.setTelphone(telphone);
        infor.setAddress(address);
        infor.setKDAddr(KDAddr);
        infor.setBegainDate(begainDate);
        infor.setEndDate(endDate);
        infor.setRemark(remark);
        try {
            kuandaiService.update(infor);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping("/delete")
    public String delete(@RequestParam(value = "name",required = false) String name,
                         @RequestParam(value = "telphone",required = false) String telphone,
                         @RequestParam(value = "kuandaiNo",required = false) String kuandaiNo,
                         @RequestParam(value = "address",required = false) String address,
                         @RequestParam(value = "KDAddr",required = false) String KDAddr,
                         @RequestParam(value = "begainDate",required = false) String begainDate,
                         @RequestParam(value = "endDate",required = false) String endDate,
                         @RequestParam(value = "remark",required = false) String remark,
                         Model model){
        String result = "";
        Information infor = new Information();
        infor.setName(name);
        infor.setTelphone(telphone);
        try {
            kuandaiService.delete(infor);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

}
