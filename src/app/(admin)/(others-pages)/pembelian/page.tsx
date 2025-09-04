'use client'
import React, {useState, useEffect} from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import DatePicker from '@/components/form/date-picker';
import Button from "@/components/ui/button/Button";
import SearchableSelect from "@/components/form/SearchableSelect";
import DataPembelian from "@/components/tables/DataPembelian";

export default function Stok() {
    const options = [
        { value: "CEMERLANG SPORT GROUP", label: "CEMERLANG SPORT GROUP" },
        { value: "00002", label: "AKSESORIS TENIS" },
        { value: "00003", label: "BAJU + KAOS" },
    ];
    const options2 = [
        { value: "00001", label: "SUPPORTER" },
        { value: "00002", label: "AKSESORIS TENIS" },
        { value: "00003", label: "BAJU + KAOS" },
    ];
    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };
    const [Tanggal, setTanggal] = useState("");

    useEffect(() => {
    const now = new Date();
    const formatted = now.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setTanggal(formatted);

  }, []);
  return (
    <div>
    <PageBreadcrumb pageTitle="Pembelian Barang"/>
        <ComponentCard title="Input Pembelian" className="mb-5">
        <form className="space-y-6">
          <div className="flex justify-between">
            <div className="w-[49%]">
                <DatePicker
                   id="date-picker"
                   label="Tanggal"
                   placeholder="Select a date"
                   defaultDate={Tanggal}
                   onChange={(dates, currentDateString) => {
                    // Handle your logic
                    console.log({ dates, currentDateString });
                    setTanggal(currentDateString);
                    }}
                />
            </div>
            <div className="w-[49%]">
                <Label>No Faktur</Label>
                <Input defaultValue={'000001'} disabled></Input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[70%]">
                <Label>Supplier</Label>
                <SearchableSelect
                options={options}
                    placeholder="Pilih Supplier"
                    onChange={handleSelectChange}
                    className="dark:bg-dark-900"
                />
            </div>
            <div className="w-[28%]">
                <Label>Saldo Hutang</Label>
                <Input
                defaultValue={'255.000'}
                disabled
                ></Input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[23%]">
                <Label>Termin</Label>
                <Input></Input>
            </div>
            <div className="w-[50%] pointer-events-none">
                <DatePicker
                   id="date-picker"
                   label="Tanggal Jatuh Tempo"
                   placeholder="Select a date"
                   defaultDate={Tanggal}
                   onChange={(dates, currentDateString) => {
                    // Handle your logic
                    console.log({ dates, currentDateString });
                    setTanggal(currentDateString);
                    }}
                />
            </div>
            <div className="w-[23%]">
                <Label>Ket</Label>
                <Input defaultValue={"Beli KREDIT"} disabled></Input>
            </div>
          </div>
            <div className="flex justify-between">
                <div className="w-[50%]">
                    <Label>Nama Barang</Label>
                    <SearchableSelect
                    options={options2}
                        placeholder="Pilih Barang"
                        onChange={handleSelectChange}
                        className="dark:bg-dark-900"
                    />
                </div>
                <div className="w-[22%]">
                    <Label>Stok Barang Saat Ini</Label>
                    <Input
                    defaultValue={'104'}
                    disabled
                    ></Input>
                </div>
                <div className="w-[15%]">
                    <Label>Barcode</Label>
                    <Input
                    defaultValue={'00001'}
                    disabled
                    ></Input>
                </div>
                <div className="w-[10%]">
                    <Label>Satuan</Label>
                    <Input
                    defaultValue={'PCS'}
                    disabled
                    ></Input>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-[49%]">
                    <Label>Harga Beli</Label>
                    <Input defaultValue={"70.000"} disabled></Input>
                </div>
                <div className="w-[49%]">
                    <Label>Harga Satuan</Label>
                    <Input></Input>
                </div>
            </div>
            <div>
                <Label>Total Harga</Label>
                <Input defaultValue={"4.500.000"} disabled></Input>
            </div>
            <div>
            <Button size="md" variant="primary">
              Tambah Pembelian
            </Button>
            </div>
        </form>
        </ComponentCard>
        <ComponentCard title="Tabel Data Pembelian">
            <DataPembelian/>
        </ComponentCard>
    </div>
  );
}
