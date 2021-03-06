﻿//===================================================================================
// 北京联想智慧医疗信息技术有限公司 & 上海研发中心
//===================================================================================
// 处方配方情况
//
//
//===================================================================================
// .Net Framework 4.5
// CLR版本： 4.0.30319.42000
// 创建人：  Jay
// 创建时间：2016/6/16 17:20:37
// 版本号：  V1.0.0.0
//===================================================================================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HBB.ServiceInterface.Medicine
{
    public interface IPrescription
    {

        
        /// <summary>
        /// 门急诊、住院处方数量(当前实时)
        /// </summary>
        /// <returns>
        /// T1：门急诊处方数量
        /// T2：住院处方数量
        /// </returns>
        Tuple<Int32, Int32> PrescriptionCount();


    }
}
