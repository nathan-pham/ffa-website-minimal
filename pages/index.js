import Section from "@components/Section"
import TextGradient from "@components/TextGradient"
import { PrimaryButton } from "@components/Atoms/Button"

function Step({ number, circleGradient="from-blue-500 to-green-300", lineGradient="from-blue-500" }) {

    return (

        <div className="flex flex-col items-center">
            <div className={ [ "h-24 w-px bg-gradient-to-t", lineGradient ].join(' ') }></div>
            <div className={ [ "rounded-full w-10 h-10 flex items-center justify-center font-semibold text-white bg-gradient-to-r", circleGradient ].join(' ') }>
                { number }
            </div>
        </div>
        

    )

}

function LearningSection() {

    const threeRingModel = [
        { title: "Classroom", description: "Question-based instruction and learning with amazing classes and labs that you can earn college credit for. Check the Del Oro course catalog." },
        { title: "Projects", description: "Experiential, service, and work-based learning with a Superviced Agricultural Experience program. Earn money by working with animal or plant systems." },
        { title: "Organization", description: "Gain leadership, personal, and career skills through engagement in a national organization, FFA. Participate in competitions, join leadership conferences, and have fun!" }
    ]

    return (

        <div className="flex">
            <img src="illustrations/learning.svg" className="w-5/12" />

            <div>

                {

                    threeRingModel.map(({ title, description }, i) => (
                        
                        <>
                            <h2 className={ [ "text-3xl font-bold", i ? "mt-10" : "" ].join(' ') }>{ title }</h2>
                            <p className="text-gray-500 text-xl mt-2">{ description }</p>
                        </>
               
                    ))
                
                }

            </div>
        </div>    

    )

}

export default function Home() {
    
    return (
        <>
            <Section className="h-screen flex items-center">
                <div>
                    <h1 className="text-6xl font-extrabold leading-tight">
                        <TextGradient>Start building</TextGradient> the future of agriculture.
                    </h1>
                    <p className="mt-6 mb-8 text-gray-500 text-xl">Del Oro FFA is a youth organization that provides the best learning experience with an obsessive focus on leadership and career skills.</p>
                    <PrimaryButton>Start Learning</PrimaryButton>
                </div>

                <img src="illustrations/chicken.svg" className="w-5/12" />
            </Section>

            <Section>
                <div className="text-center">
                    <p className="uppercase font-mono text-sm font-semibold tracking-widest mb-8">Explore the Del Oro FFA Way</p>
                    
                    <Step number={ 1 } />
                    
                    <h2 className="my-6 text-5xl font-bold">Learn by <TextGradient gradient="from-blue-500 to-green-300">doing stuff.</TextGradient></h2>
                    <p className="text-gray-500 text-xl">Agricultural education includes 3 components.</p>
                </div>

                <div className="mt-16">
                    <LearningSection />
                </div>
            </Section>

            <Section className="mt-10">
                <div className="text-center">
                    <Step number={ 2 } circleGradient="from-orange-500 to-yellow-300" lineGradient="from-orange-500" />
                    
                    <h2 className="my-6 text-5xl font-bold">Build with our <TextGradient gradient="from-orange-500 to-yellow-300">awesome team.</TextGradient></h2>
                    <p className="text-gray-500 max-w-2xl text-xl mx-auto">Doing stuff alone is lame. Collaborate with your peers and our officers to make events happen, participate in national competitions, and have fun!</p>
                </div>

                <div className="w-full grid grid-cols-3 grid-rows-2 gap-6 h-96 mt-12">
                    <div class="relative col-span-3 row-span-2 md:col-span-2">
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweXWLNvRNPP3AD9TUn0lHBBO8rS9XN3MU9spqqzwHPdoZaWMgqcOkp4cwmJcUUieSJ2fqddal0M20rzp98mZSP6LtRLRNrYJfjtB_W1vwiWCTyt2m3NaxdOAsDp7Dr2-zgLfvaFBcqushW-Ysbp8OJf6jpNEt_9Nj_TjT7JfsU1Wpj6X78Jd1rZ-xuGUxwcFtPqAt0GFtuIonTjA1INC6CvqtTX2AiHwn_SLQr_QnslriK7O2DYZeIYacmzpQBUjPB4j4LfNnWVvvIgonqpixlpxk97KYrlvgtEcseRV60UoT5wAlSUu8dPbWjmLChMI-HkWjCEMl7VI4CrpxVjotCE8JXk7D8aSID4Wzu_BB3tOgzSo9wnoEJSiA_X3xWf5wD1hasQbp5CvubnHUaICFpDlC_JtPCi8jYNiJecIakwyowAnM2BXJK-it3T4WMSVaC0WOStNRNSlSi35sHDfl1YM6iabQMGq2g51UFlx3XvtD0tEN0An-EB1Cx72rckT8eifu1KIyTTj8a1JS34L0HgPcfxPKLXLM58MIoDmFj5-Mu9Z-LqSeNivw08rJcFzGLcb1XK0N3IeQ2sbVffPe4GEXdxTRkc6m2kU8_rL1JcNI_qdxVFCJXoIq1Jfeijr-2jAPsGdTfm4-_nY2CElBzHjxWnv1vfjGDyNLnS785bYsC2tcVsNGRe30NPEarIAhwDMoZTXJjuXwZdY0POB7q9HdXU6k_SUHJBi-gal7zS3_hZx_XiUm1lzMri7k1OuO6kyHnXu7S9PQw63yA=w686-h914-no?authuser=0" alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                    </div>
                    <div class="relative hidden md:block">
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweUF7eGj_PXziZg08hVzYq17VXZkeTMC2qHddYtbQcvqQQ9TqGjxlL7h8sAckNmfjjVCgSzv7iv3QcEWvcwJjMoJXEb56xAujltKNheZxh1qhVJVVfUaW4QM3Yva8t_lsU1gM9FDsVy394iKs15T2ztpM8lx9-MfCtFU2e4csM0l6Y0P0nZikhFoOQqV8Q53Sw7OyxAE8cdieVWGUy8D0Ljv3qPJ6-0xxzl8vJxjpHHwV_44GAl70labs_NNyRfFw0p-kUziDrJ4_wAWI9dBuafh0IPJDz6VsGLZtgYglQ5C8_SBz5r3COZ15a2ZYRa1fl1p5eGwRvsus30o3icMuTKp-unon81WCqm3cNjp7WtAO3mim5GyYYjixJfpCNHu6Iti-lB8oxYIySnEwGM-SjUAPsVMZ7MkmVMY_PQqu2YEMbdZUOQlidtNv6MW4LM8KVU9EQBeUJ_UuUVc0SvCzgQJGeE6nIHEskux9AHX4X-Dn5yrs7pxUGWmDLaIIdSOAlZdSEBtQi1rbOv8h6djS-vI2byCk-grcjNLma3OAKPNQJeh9bG6inrYcHCBqFL6pQtT4Eel6eBjcDxZc0gSwL2YOKWXjH62gaLhix_2hYyN3U_7LJ51mcirU78NkrSselJ0bcbzVvfQ7ffbXNSQv-NkRISr92ba5HqStJ4b4L0MwrWk1oB4NDKm-I96Qs4_UoW-tjRwDi8U_Z7sP7QcDBpJ6qPzh726ZHvKSIFgCdSz47kXgmCT2070mniMUWBtyC0KEzeqxrt8H5xj1A=w1218-h914-no?authuser=0" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div class="relative hidden md:block">
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweUnyTzCQ58dC_pFg2AVOnIa66z46bEdKos2kuR8XT1yasmc8hgIoM-wHOGOkM8NBKN1Vg2ePdZIXXxByEsnS6Zc2csF3tetDZ6EpAP7IwFUfW4smHgYsI_qMU5Jt_yE_5VA8XbfboAg_hss0y2k48sNXu3l3Vv1xBQMvWN9p2Xd7YGanSGlfem80HBQdsKt3ly_BlkGwaeMRSIXhmvUyIK3jYJJ9DKNFIa3LgwAd_M93jnkKBOYqr8hUIXSOzVi4o3LU0NzdSSM29Cgp7plFTTr-ZwsUV1WSMi4WT3fyRWjP_JU9fCfICfP2NFt17ILEKuUuFxRnKQU9x8XqeQZu7BSK9KCS8TFQVcCvSG-eDlm7ncv_T8PlDd1UPmf6y3dOX7NEkppw41-HzCwCBY2p6-H6GT8A2KKVjMVWJEMvryB0VgRyxTpSBBgcy9qJU-xuTqdJbdrPUT9aWAGzQ5o67uqL4cXhCzyvD0gGd7v3-hQPDoRj8xAVt8WcPwBpkwKsdt5CH--9xLxX8dWW8Ml8OjesIPWu8o_ouSzfuaD5tqZgpmVkfjJq2pqAPofubEgeBsOsBNa7UzkVYExdL31uZrUd4OYy-A3BYj7xj4aZI7zU8sDVWfzLIBRPliNYrEMruWIkAJpDE8HqgT-KwuidL-0pLcr7tg8J9-BWx8kVgVLbZKSbbS4pqo1Ku-FFp_xEexkQF7N-I3L-6g5zHjNkACqpwymgVYy914RBpZEVjv3hzEQXova_xgQfH5UGq69VEX3WNG1Lo4qcIqTmw=w1218-h914-no?authuser=0" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                </div>

            </Section>

            <Section className="my-20">
                <div className="w-full text-center">
                    <h2 className="text-5xl font-bold">Trusted by <TextGradient>local businesses.</TextGradient></h2>
                    <p className="mt-6 mb-8 text-gray-500 text-xl">You're in good hands. <b>Promise</b>.</p>
                    <PrimaryButton>Sponsor Us</PrimaryButton>
                </div>
            </Section>

        </>
    )

}