import { Img } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Events = (props: Props) => {
    return (
        <div className="bg-[#dbedec] flex flex-row justify-center w-full">
            <div className="bg-[#dbedec] w-[1540px] h-[1032px]">
                <div className="flex flex-col w-[798px] h-[907px] items-center gap-[32px] absolute top-[82px] left-[339px] overflow-hidden overflow-y-scroll">
                    <div className="relative w-[679px] h-[157.59px]">
                        <div className="relative h-[158px] -left-px">
                            <div className="absolute w-[679px] h-[121px] top-[18px] left-0 bg-[#b39b85] rounded-[20px]" />
                            <img
                                className="absolute w-[137px] h-[158px] top-0 left-[28px] object-cover"
                                alt="Base"
                                src="https://c.animaapp.com/Nwmtisn9/img/base@2x.png"
                            />
                            <img
                                className="absolute w-[137px] h-[158px] top-0 left-[28px]"
                                alt="Color"
                                src="https://c.animaapp.com/Nwmtisn9/img/color@2x.png"
                            />
                            <img
                                className="absolute w-[137px] h-[158px] top-0 left-[28px] mix-blend-screen object-cover"
                                alt="Glossy"
                                src="https://c.animaapp.com/Nwmtisn9/img/glossy@2x.png"
                            />
                            <p className="absolute w-[247px] top-[50px] left-[216px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[24px] text-center tracking-[0.10px] leading-[normal]">
                                Hay varios eventos esperando por ti
                            </p>
                        </div>
                    </div>
                    <div className="flex-col items-start gap-[10px] inline-flex relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[32px] relative flex-[0_0_auto]">
                            <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                                <img
                                    className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                    alt="Imagen"
                                    src="https://c.animaapp.com/Nwmtisn9/img/imagen@2x.png"
                                />
                                <div className="absolute w-[297px] h-[24px] top-[198px] left-[13px] [font-family:'Montserrat',Helvetica] font-bold text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Evento 1 ######
                                </div>
                                <p className="absolute w-[297px] h-[24px] top-[228px] left-[13px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Jun 26 - Jun 27, 2023
                                </p>
                                <p className="absolute w-[123px] h-[24px] top-[274px] left-[51px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    <span className="font-bold">128</span>
                                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                        {" "}
                                        participants
                                    </span>
                                </p>
                                <div className="absolute w-[24px] h-[24px] top-[276px] left-[13px]">
                                    <img
                                        className="absolute w-[28px] h-[28px] top-[-2px] left-[-2px]"
                                        alt="Rectangle"
                                        src="https://c.animaapp.com/Nwmtisn9/img/rectangle-495-6@2x.png"
                                    />
                                </div>
                                <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[270px] left-[216px] bg-[#9d906f] rounded-[10px]">
                                    <img
                                        className="relative w-[7.67px] h-[5.75px]"
                                        alt="Check"
                                        src="https://c.animaapp.com/Nwmtisn9/img/check@2x.png"
                                    />
                                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                        Unido
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                                <img
                                    className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                    alt="Rectangle"
                                    src="https://c.animaapp.com/Nwmtisn9/img/rectangle-6@2x.png"
                                />
                                <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Evento 2 ######
                                </div>
                                <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Jun 27 - Jun 29, 2023
                                </p>
                                <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    <span className="font-bold">64</span>
                                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                        {" "}
                                        participants
                                    </span>
                                </p>
                                <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-495-5@2x.png)] bg-cover bg-[50%_50%]" />
                                <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                    <img
                                        className="relative w-[16px] h-[20.29px]"
                                        alt="Icons general shield"
                                        src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                    />
                                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                        Unirse
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col items-start gap-[10px] inline-flex relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[32px] relative flex-[0_0_auto]">
                            <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                                <img
                                    className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                    alt="Rectangle"
                                    src="https://c.animaapp.com/Nwmtisn9/img/rectangle-5@2x.png"
                                />
                                <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Evento 3 ######
                                </div>
                                <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Jul 01 - Jul 02, 2023
                                </p>
                                <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    <span className="font-bold">1024</span>
                                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                        {" "}
                                        participants
                                    </span>
                                </p>
                                <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-9@2x.png)] bg-cover bg-[50%_50%]" />
                                <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                    <img
                                        className="relative w-[16px] h-[20.29px]"
                                        alt="Icons general shield"
                                        src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                    />
                                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                        Unirse
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                                <img
                                    className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                    alt="Rectangle"
                                    src="https://c.animaapp.com/Nwmtisn9/img/rectangle-4@2x.png"
                                />
                                <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Evento 4 ######
                                </div>
                                <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    Jul 01 - Jul 03, 2023
                                </p>
                                <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    <span className="font-bold">256</span>
                                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                        {" "}
                                        participants
                                    </span>
                                </p>
                                <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-495-4@2x.png)] bg-[100%_100%]" />
                                <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                    <img
                                        className="relative w-[16px] h-[20.29px]"
                                        alt="Icons general shield"
                                        src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                    />
                                    <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                        Unirse
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-[32px] relative flex-[0_0_auto]">
                        <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                            <img
                                className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                alt="Rectangle"
                                src="https://c.animaapp.com/Nwmtisn9/img/rectangle-3@2x.png"
                            />
                            <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Evento 5 ######
                            </div>
                            <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Jun 24 - Jun 26 2023
                            </p>
                            <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                <span className="font-bold">1024</span>
                                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    {" "}
                                    participants
                                </span>
                            </p>
                            <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-495-3@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                <img
                                    className="relative w-[16px] h-[20.29px]"
                                    alt="Icons general shield"
                                    src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                    Unirse
                                </div>
                            </div>
                        </div>
                        <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                            <img
                                className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                alt="Rectangle"
                                src="https://c.animaapp.com/Nwmtisn9/img/rectangle-2@2x.png"
                            />
                            <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Evento 6 ######
                            </div>
                            <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Jun 24 - Jun 26 2023
                            </p>
                            <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                <span className="font-bold">1024</span>
                                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    {" "}
                                    participants
                                </span>
                            </p>
                            <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-495-2@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                <img
                                    className="relative w-[16px] h-[20.29px]"
                                    alt="Icons general shield"
                                    src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                    Unirse
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center gap-[32px] inline-flex relative flex-[0_0_auto]">
                        <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                            <img
                                className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                alt="Rectangle"
                                src="https://c.animaapp.com/Nwmtisn9/img/rectangle-1@2x.png"
                            />
                            <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Evento 7 ######
                            </div>
                            <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Jun 24 - Jun 26 2023
                            </p>
                            <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                <span className="font-bold">1024</span>
                                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    {" "}
                                    participants
                                </span>
                            </p>
                            <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-495-1@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                <img
                                    className="relative w-[16px] h-[20.29px]"
                                    alt="Icons general shield"
                                    src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                    Unirse
                                </div>
                            </div>
                        </div>
                        <div className="relative w-[324px] h-[323px] rounded-[20px] border-2 border-solid border-[#00000a]">
                            <img
                                className="absolute w-[320px] h-[182px] top-[2px] left-[2px] object-cover"
                                alt="Rectangle"
                                src="https://c.animaapp.com/Nwmtisn9/img/rectangle@2x.png"
                            />
                            <div className="top-[198px] font-bold absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Evento 8 ######
                            </div>
                            <p className="top-[228px] font-normal absolute w-[297px] h-[24px] left-[13px] [font-family:'Montserrat',Helvetica] text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                Jun 24 - Jun 26 2023
                            </p>
                            <p className="absolute w-[123px] h-[24px] top-[273px] left-[45px] [font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                <span className="font-bold">1024</span>
                                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#302424] text-[14px] tracking-[0] leading-[24px]">
                                    {" "}
                                    participants
                                </span>
                            </p>
                            <div className="absolute w-[24px] h-[24px] top-[275px] left-[15px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-495@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="inline-flex items-center gap-[10px] px-[15px] py-[10px] absolute top-[267px] left-[205px] bg-[#9d906f] rounded-[10px]">
                                <img
                                    className="relative w-[16px] h-[20.29px]"
                                    alt="Icons general shield"
                                    src="https://c.animaapp.com/Nwmtisn9/img/icons---general---shield-check-6@2x.png"
                                />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                                    Unirse
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[294px] items-start gap-[32px] fixed top-[131px] left-[1212px] rounded-[10px] overflow-hidden">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[24px] tracking-[0.10px] leading-[normal]">
                        Filtrar por:
                    </div>
                    <div className="inline-flex items-center gap-[16px] px-[10px] py-[7px] relative flex-[0_0_auto] rounded-[10px] border-2 border-solid border-[#00000a]">
                        <div className="relative w-fit mt-[-2.00px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[14px] tracking-[0.10px] leading-[24px] whitespace-nowrap">
                            Esta Semana
                        </div>
                        <img
                            className="relative w-[16px] h-[16px]"
                            alt="Ic dropdown"
                            src="https://c.animaapp.com/Nwmtisn9/img/ic-dropdown-2.svg"
                        />
                    </div>
                    <div className="inline-flex items-center gap-[16px] px-[10px] py-[7px] relative flex-[0_0_auto] rounded-[10px] border-2 border-solid border-[#00000a]">
                        <div className="relative w-fit mt-[-2.00px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[14px] tracking-[0.10px] leading-[24px] whitespace-nowrap">
                            Global
                        </div>
                        <img
                            className="relative w-[16px] h-[16px]"
                            alt="Ic dropdown"
                            src="https://c.animaapp.com/Nwmtisn9/img/ic-dropdown-1.svg"
                        />
                    </div>
                    <div className="inline-flex items-center gap-[16px] px-[10px] py-[7px] relative flex-[0_0_auto] rounded-[10px] border-2 border-solid border-[#00000a]">
                        <div className="relative w-fit mt-[-2.00px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[14px] tracking-[0.10px] leading-[24px] whitespace-nowrap">
                            Cualquier nivel
                        </div>
                        <img
                            className="relative w-[16px] h-[16px]"
                            alt="Ic dropdown"
                            src="https://c.animaapp.com/Nwmtisn9/img/ic-dropdown-1.svg"
                        />
                    </div>
                    <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[18px] tracking-[0.10px] leading-[normal]">
                            Deportes
                        </div>
                        <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
                            <div className="relative w-[50px] h-[50px] rounded-[10px] border-2 border-solid border-black bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-8@2x.png)] bg-[100%_100%]" />
                            <div className="relative w-[50px] h-[50px] rounded-[10px] border-2 border-solid border-black bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-7@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="relative w-[50px] h-[50px] rounded-[10px] border-2 border-solid border-black bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-6@2x.png)] bg-cover bg-[50%_50%]" />
                        </div>
                        <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
                            <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-5@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-4@2x.png)] bg-[100%_100%]" />
                            <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-3@2x.png)] bg-cover bg-[50%_50%]" />
                        </div>
                        <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
                            <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-2@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494-1@2x.png)] bg-cover bg-[50%_50%]" />
                            <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/Nwmtisn9/img/rectangle-494@2x.png)] bg-cover bg-[50%_50%]" />
                        </div>
                    </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[32px] fixed top-[131px] left-[83px]">
                    <div className="relative w-[187px] h-[40px]">
                        <div className="relative h-[40px]">
                            <div className="inline-flex items-center gap-[16px] absolute top-0 left-0">
                                <div className="relative w-[40px] h-[40px] rounded-[60px] border-2 border-solid border-[#292932]" />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal]">
                                    Comunidades
                                </div>
                            </div>
                            <img
                                className="absolute w-[24px] h-[24px] top-[8px] left-[9px]"
                                alt="Earth"
                                src="https://c.animaapp.com/Nwmtisn9/img/earth-1.svg"
                            />
                        </div>
                    </div>
                    <div className="relative w-[132px] h-[40px]">
                        <div className="relative h-[40px]">
                            <div className="inline-flex items-center gap-[16px] absolute top-0 left-0">
                                <div className="relative w-[40px] h-[40px] rounded-[60px] border-2 border-solid border-black" />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal]">
                                    Eventos
                                </div>
                            </div>
                            <div className="absolute w-[20px] h-[22px] top-[9px] left-[10px]">
                                <img
                                    className="absolute w-[13px] h-[20px] top-px left-[4px]"
                                    alt="Element"
                                    src="https://c.animaapp.com/Nwmtisn9/img/-----2@2x.png"
                                />
                                <div className="absolute w-[2px] h-[6px] top-[4px] left-0 bg-black rounded-[20px] opacity-50" />
                                <div className="absolute w-[2px] h-[6px] top-[4px] left-[18px] bg-black rounded-[20px] opacity-50" />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[119px] h-[40px]">
                        <div className="relative h-[40px]">
                            <div className="inline-flex items-center gap-[16px] absolute top-0 left-0">
                                <div className="relative w-[40px] h-[40px] rounded-[60px] border-2 border-solid border-[#292932]" />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal]">
                                    Rating
                                </div>
                            </div>
                            <img
                                className="absolute w-[24px] h-[24px] top-[8px] left-[8px]"
                                alt="Bullet list"
                                src="https://c.animaapp.com/Nwmtisn9/img/bullet-list-1.svg"
                            />
                        </div>
                    </div>
                    <div className="relative w-[158px] h-[40px]">
                        <div className="relative h-[40px]">
                            <div className="inline-flex items-center gap-[16px] absolute top-0 left-0">
                                <div className="relative w-[40px] h-[40px] rounded-[60px] border-2 border-solid border-[#292932]" />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal]">
                                    Categorias
                                </div>
                            </div>
                            <img
                                className="absolute w-[24px] h-[24px] top-[7px] left-[8px]"
                                alt="Gamepad"
                                src="https://c.animaapp.com/Nwmtisn9/img/gamepad-2-1.svg"
                            />
                        </div>
                    </div>
                    <div className="relative w-[129px] h-[40px]">
                        <div className="relative h-[40px]">
                            <div className="inline-flex items-center gap-[16px] absolute top-0 left-0">
                                <div className="relative w-[40px] h-[40px] rounded-[60px] border-2 border-solid border-[#292932]" />
                                <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal]">
                                    Amigos
                                </div>
                            </div>
                            <img
                                className="absolute w-[24px] h-[24px] top-[7px] left-[9px]"
                                alt="Group"
                                src="https://c.animaapp.com/Nwmtisn9/img/group-1.svg"
                            />
                        </div>
                    </div>
                </div>
                <img
                    className="fixed w-[32px] h-[64px] top-[193px] left-0"
                    alt="Frame"
                    src="https://c.animaapp.com/Nwmtisn9/img/frame-5091.svg"
                />
                <header className="flex w-[1540px] h-[72px] items-center gap-[264px] px-[37px] py-[15px] fixed top-0 left-0 bg-[#d9d9d9]">
                    <p className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-black text-[14px] text-center tracking-[5.00px] leading-[normal]">
                        <span className="font-bold">DEPOR</span>
                        <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-[14px] tracking-[5.00px]">
                            tinder
                        </span>
                    </p>
                    <div className="relative w-[515px] h-[50px] mt-[-4.00px] mb-[-4.00px] rounded-[60px] border-2 border-solid border-[#292932]">
                        <div className="absolute top-[10px] left-[51px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[14px] tracking-[0.10px] leading-[24px] whitespace-nowrap">
                            Buscar
                        </div>
                        <img
                            className="absolute w-[24px] h-[24px] top-[11px] left-[13px]"
                            alt="Search"
                            src="https://c.animaapp.com/Nwmtisn9/img/search-1.svg"
                        />
                    </div>
                    <div className="flex w-[271px] items-center justify-end gap-[24px] relative mr-[-7.00px]">
                        <div className="relative w-[40px] h-[40px] rounded-[20px] border-2 border-solid border-[#292932]">
                            <img
                                className="absolute w-[24px] h-[24px] top-[6px] left-[6px]"
                                alt="Add user"
                                src="https://c.animaapp.com/Nwmtisn9/img/add-user-1.svg"
                            />
                        </div>
                        <div className="relative w-[40px] h-[40px] rounded-[20px] border-2 border-solid border-[#292932]">
                            <img
                                className="absolute w-[24px] h-[24px] top-[6px] left-[6px]"
                                alt="Notifications"
                                src="https://c.animaapp.com/Nwmtisn9/img/notifications-1-1.svg"
                            />
                        </div>
                        <div className="relative w-[40px] h-[40px] rounded-[20px] border-2 border-solid border-[#292932]">
                            <img
                                className="absolute w-[24px] h-[24px] top-[6px] left-[6px]"
                                alt="Group chat"
                                src="https://c.animaapp.com/Nwmtisn9/img/group-chat-1.svg"
                            />
                        </div>

                        <Link to="/perfil">
                            <img
                                className="relative w-[40px] h-[40px]"
                                alt="Perfil"
                                src="https://c.animaapp.com/Nwmtisn9/img/perfil.svg"
                            />
                        </Link>

                    </div>
                </header>
            </div>
        </div>
    )
}

export default Events