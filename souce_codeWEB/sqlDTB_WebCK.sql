CREATE DATABASE QuanLyBanHang
GO
USE QuanLyBanHang
GO

CREATE TABLE NhanVien (
    MaNhanVien INT PRIMARY KEY IDENTITY(1,1),
    HoTen NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    TrangThai NVARCHAR(20) NOT NULL,
    HinhDaiDien VARBINARY(MAX)
);

GO

CREATE TABLE SanPham (
    MaSanPham INT PRIMARY KEY IDENTITY(1,1),
    MaVach NVARCHAR(50) NOT NULL,
    TenSanPham NVARCHAR(100) NOT NULL,
    GiaNhap DECIMAL(18,2) NOT NULL,
    GiaBanLe DECIMAL(18,2) NOT NULL,
    MaDanhMuc INT NOT NULL,
    NgayTao DATETIME NOT NULL
);

GO

ALTER TABLE SanPham
ADD CONSTRAINT FK_SanPham_DanhMucSanPham FOREIGN KEY (MaDanhMuc) REFERENCES DanhMucSanPham(MaDanhMuc);


GO

CREATE TABLE DanhMucSanPham (
    MaDanhMuc INT PRIMARY KEY IDENTITY(1,1),
    TenDanhMuc NVARCHAR(100) NOT NULL,
    MoTa NVARCHAR(MAX)
);

GO

CREATE TABLE KhachHang (
    MaKhachHang INT PRIMARY KEY IDENTITY(1,1),
    HoTen NVARCHAR(100) NOT NULL,
    SoDienThoai NVARCHAR(20) NOT NULL,
    DiaChi NVARCHAR(200) NOT NULL
);

GO

CREATE TABLE DonHang (
    MaDonHang INT PRIMARY KEY IDENTITY(1,1),
    MaKhachHang INT,
    TongTien DECIMAL(18,2) NOT NULL,
    NgayDatHang DATETIME NOT NULL,
    CONSTRAINT FK_DonHang_KhachHang FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang)
);

GO

CREATE TABLE ChiTietDonHang (
    MaChiTietDonHang INT PRIMARY KEY IDENTITY(1,1),
    MaDonHang INT NOT NULL,
    MaSanPham INT NOT NULL,
    SoLuong INT NOT NULL,
    DonGia DECIMAL(18,2) NOT NULL,
    CONSTRAINT FK_ChiTietDonHang_DonHang FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDonHang),
    CONSTRAINT FK_ChiTietDonHang_SanPham FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

GO

CREATE TABLE LichSuMuaHang (
    MaLichSuMuaHang INT PRIMARY KEY IDENTITY(1,1),
    MaKhachHang INT NOT NULL,
    MaDonHang INT NOT NULL,
    NgayMua DATETIME NOT NULL,
    TongTien DECIMAL(18,2) NOT NULL,
    CONSTRAINT FK_LichSuMuaHang_KhachHang FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang),
    CONSTRAINT FK_LichSuMuaHang_DonHang FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDonHang)
);

GO

CREATE TABLE HoaDon (
    MaHoaDon INT PRIMARY KEY IDENTITY(1,1),
    MaNhanVien INT NOT NULL,
    MaKhachHang INT NOT NULL,
    TongTien DECIMAL(18,2) NOT NULL,
    NgayTao DATETIME NOT NULL,
    CONSTRAINT FK_HoaDon_NhanVien FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien),
    CONSTRAINT FK_HoaDon_KhachHang FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang)
);