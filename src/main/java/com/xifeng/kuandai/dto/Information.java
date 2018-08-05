package com.xifeng.kuandai.dto;

public class Information {
    private Integer id;

    private String name;

    private String telphone;

    private String kuandaino;

    private String address;

    private String kdaddr;

    private String begaindate;

    private String enddate;

    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getTelphone() {
        return telphone;
    }

    public void setTelphone(String telphone) {
        this.telphone = telphone == null ? null : telphone.trim();
    }

    public String getKuandaino() {
        return kuandaino;
    }

    public void setKuandaino(String kuandaino) {
        this.kuandaino = kuandaino == null ? null : kuandaino.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getKdaddr() {
        return kdaddr;
    }

    public void setKdaddr(String kdaddr) {
        this.kdaddr = kdaddr == null ? null : kdaddr.trim();
    }

    public String getBegaindate() {
        return begaindate;
    }

    public void setBegaindate(String begaindate) {
        this.begaindate = begaindate == null ? null : begaindate.trim();
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate == null ? null : enddate.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}