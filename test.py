马蜂窝面试题答案
def sub_parse_data(data_a, data_b, reverse):
    result = []
    if not data_a:
        return data_b
    elif not data_b:
        return data_a
    if reverse:
        for tmp_b in data_b:
            for tmp_a in data_a:
                result.append('{}{}'.format(tmp_a, tmp_b))
    else:
        for tmp_a in data_a:
            for tmp_b in data_b:
                result.append('{}{}'.format(tmp_a, tmp_b))
    return result

def parse_data(data):
    if data == None:
        return None
    if len(data) == 1:
        return data
    if len(data) == 2:
        return sub_parse_data(data[0], data[1])
    reverse = True
    result = sub_parse_data(data[-2], data[-1], reverse)
    for tmp_index in range(len(data)-2):
        reverse = not reverse
        result = sub_parse_data(data[len(data)-3-tmp_index], result, reverse)
    return result

data=[['a'], ['A', 'B'], ['0', '1']]

print(parse_data(data))


浪淘金面试题：
import datetime
def comb_num(base_num, select_num):
    result_num = 1
    select_num = select_num if select_num < base_num - select_num else base_num - select_num
    num_arr = range(1, base_num + 1)
    for index in range(select_num):
        result_num *= num_arr[-1-index]
        result_num //= num_arr[index] 

    return result_num

def sub_stat_zero_num(begin_num, end_num, base_num = 10):    # (678, 1678], power_num: 3, base_num: 10
    zero_cnt = 0
    if len(str(begin_num)) == len(str(end_num)):   # (10005, 50005], power_num: 4, mult_num: 4
        power_num = len(str(begin_num)) - 1
        mult_num = int(str(end_num)[0]) - int(str(begin_num)[0])
        tmp_zero_cnt = 0
        for tmp_zero_num in range(1, power_num+1):
            tmp_zero_cnt += tmp_zero_num * comb_num(power_num, tmp_zero_num) * pow(base_num-1, power_num - tmp_zero_num)
        zero_cnt = mult_num * tmp_zero_cnt

    elif str(end_num)[1] != str(begin_num)[0] :   # (9005, 10005]
        power_num = len(str(begin_num)) - 1
        tmp_zero_cnt = 0
        for tmp_zero_num in range(1, power_num+1):
            tmp_zero_cnt += tmp_zero_num * comb_num(power_num, tmp_zero_num) * pow(base_num-1, power_num - tmp_zero_num)
        min_extra_zero_num = pow(base_num, len(str(end_num)) - 1)
        zero_cnt = tmp_zero_cnt + (end_num - min_extra_zero_num + 1)   # 10000 10001 10002 10003 10004 10005

    else:  # (1005, 51005]
        highest_num = int(str(end_num)[0])
        power_num = len(str(begin_num))
        tmp_zero_cnt = 0
        for tmp_zero_num in range(1, power_num+1):
            tmp_zero_cnt += tmp_zero_num * comb_num(power_num, tmp_zero_num) * pow(base_num-1, power_num - tmp_zero_num)
        if tmp_zero_cnt == 0:
            tmp_zero_cnt = 1
        tmp_zero_cnt *= highest_num
        zero_cnt = tmp_zero_cnt       

    return zero_cnt

def stat_zeros_num(num):
    if num == None:
        return 0
    next_num, power_num = int(str(num)[1:]), len(str(num)[1:])    #  normal  num: 11005, next_num: 1005
    if len(str(next_num)) < len(str(num)) - 1:
        if str(num)[0] == '1':        #  num: 10005, next_num=9005
            power_num = len(str(num)) - 2
            next_num += 9 * pow(10, power_num) 
        else:                              #  num: 50005, next_num=10005
            power_num = len(str(num)) - 1
            next_num = int('1' + str(num)[1:])
    current_zeros_num = sub_stat_zero_num(next_num, num)
    if next_num <= 10:
        return current_zeros_num + 1 if next_num == 10 else current_zeros_num
    else:
        return current_zeros_num + stat_zeros_num(next_num)


starttime = datetime.datetime.now()
print("stat_zeros_num: {}".format(stat_zeros_num(10090)))
endtime = datetime.datetime.now()
time_delt = endtime - starttime
print ("fsl_method: {}".format(time_delt.total_seconds()*1000))

starttime = datetime.datetime.now()
zeros_cnt = 0
for tmp_num in range(1, 10090 + 1):
    b = [tmp_str == '0' for tmp_str in list(str(tmp_num))]
    zeros_cnt += sum(b)

print(zeros_cnt)
endtime = datetime.datetime.now()
time_delt = endtime - starttime
print ("yqz_method: {}".format(time_delt.total_seconds()*1000))