// console.clear();

const   calcForm = document.querySelector('#calc');
        calcInput__totalWashes = document.querySelector('#calcInput__totalWashes');
        calcInput__revenue = document.querySelector('#calcInput__revenue');
        avgWashAmt = 4;
        breakdown = document.querySelector('.breakdown');
        unq10 = document.querySelector('.unq10');
        unq15 = document.querySelector('.unq15');
        unq20 = document.querySelector('.unq20');
        percentText10 = document.querySelector('percentText10');
        percentText15 = document.querySelector('percentText15');
        percentText20 = document.querySelector('percentText20');

calcForm.addEventListener('submit', onSubmit);

show15 = function(){
    const memrev10 = document.querySelectorAll('.memberRev10');
    for (let i = 0; i < memrev10.length; i++){
        memrev10[i].style.display = 'none';
    }
    const memrev20 = document.querySelectorAll('.memberRev20');
    for (let i = 0; i < memrev20.length; i++){
        memrev20[i].style.display = 'none';
    }
    const mr15 = document.querySelectorAll('.memberRev15');
    for (i = 0; i < mr15.length; i++){
        mr15[i].style.display = 'inherit';
        mr15[i].innerHTML = (`$${formatter.format(memberRev15)}`);
    }

    const pt15 = document.querySelectorAll('.percentText15');
    for (i = 0; i < pt15.length; i++){
        pt15[i].style.display = 'inherit';
    }
    const pt20 = document.querySelectorAll('.percentText20');
    for (i = 0; i < pt15.length; i++){
        pt20[i].style.display = 'none';
    }
    const pt10 = document.querySelectorAll('.percentText10');
    for (i = 0; i < pt15.length; i++){
        pt10[i].style.display = 'none';
    }

    document.querySelector('.unq10').style.display = 'none';
    document.querySelector('.unq20').style.display = 'none';
    document.querySelector('.unq15').style.display = 'inherit';
    document.querySelector('.unq15').innerHTML = unq15num;

    const tr10 = document.querySelectorAll('.totalRev10');
    for (i = 0; i < tr10.length; i++){
        tr10[i].style.display = 'none';
    }
    const tr15 = document.querySelectorAll('.totalRev15');
    for (i = 0; i < tr15.length; i++){
        tr15[i].style.display = 'inherit';
        tr15[i].innerHTML = (`$${formatter.format(totalRev15)}`);
    }
    const tr20 = document.querySelectorAll('.totalRev20');
    for (i = 0; i < tr20.length; i++){
        tr20[i].style.display = 'none';
    }

    document.querySelector('.percentIncrease15').innerHTML = (`${percentIncrease15}%`);
    document.querySelector('.percentIncrease15').style.display = 'inherit';
    document.querySelector('.percentIncrease10').style.display = 'none';
    document.querySelector('.percentIncrease20').style.display = 'none';
    window.location = '#breakdown';
}

// ADD COMMAS TO NUMBERS
const formatter = new Intl.NumberFormat('en');

// SUBMIT BUTTON CLICK EVENT
function onSubmit(e){
    e.preventDefault();

    breakdown.classList.add('display');
    
    
    if(calcInput__totalWashes.value === '' || calcInput__revenue.value === ''){

    }else{
        window.location = '#breakdown';

        const tw = document.querySelectorAll('.totalWashes');
        for (let i = 0; i < tw.length; i++){
            tw[i].innerHTML = formatter.format(calcInput__totalWashes.value);
        }

        const tr = document.querySelectorAll('.totalRevenue');
        for (let i = 0; i <tr.length; i++){
            tr[i].innerHTML = (`$${formatter.format(calcInput__revenue.value)}`);
        }
        
        const awa = document.querySelectorAll('.avgWashAmt');
        for (let i = 0; i < awa.length; i++){
            awa[i].innerHTML = formatter.format(avgWashAmt);
        }

        const avePriceWash = (calcInput__revenue.value / calcInput__totalWashes.value).toFixed(2);
            const apw = document.querySelectorAll('.avePriceWash');
            for (let i = 0; i < apw.length; i++){
                apw[i].innerHTML = (`$${formatter.format(avePriceWash)}`);
            }

        const unqCust = (calcInput__totalWashes.value / avgWashAmt);
            const uc = document.querySelectorAll('.unqCust');
            for (let i = 0; i < uc.length; i++){
                uc[i].innerHTML = formatter.format(unqCust);
            }
        
        const payPerWashRevenue = (avePriceWash * avgWashAmt).toFixed(2);
            const ppwr = document.querySelectorAll('.payPerWashRevenue');
            for (let i = 0; i < ppwr.length; i++){
                ppwr[i].innerHTML = (`$${formatter.format(payPerWashRevenue)}`);
            }

        const avgMoEwPrice = (avePriceWash * 2).toFixed(2);
            const amep = document.querySelectorAll('.avgMoEwPrice');
            for (let i = 0; i < amep.length; i++){
                amep[i].innerHTML = (`$${formatter.format(avgMoEwPrice)}`);
            }

        const avgEwYr = (avgMoEwPrice * 12).toFixed(2);
            const aey = document.querySelectorAll('.avgEwYr');
            for (i = 0; i < aey.length; i++){
                aey[i].innerHTML = (`$${formatter.format(avgEwYr)}`);
            }

        const   unq10num = (unqCust * .10);
            document.querySelector('.unq10').innerHTML = formatter.format(unq10);
                unq15num = (unqCust * .15);
            document.querySelector('.unq15').innerHTML = formatter.format(unq15);
                unq20num = (unqCust * .20);
            document.querySelector('.unq20').innerHTML = formatter.format(unq20);

        const   memberRev10 = (unq10num * avgEwYr).toFixed(2);
                memberRev15 = (unq15num * avgEwYr).toFixed(2);
                memberRev20 = (unq20num * avgEwYr).toFixed(2);
        
        const   totalRev10 = (parseInt(calcInput__revenue.value) + parseInt(memberRev10));
                totalRev15 = (parseInt(calcInput__revenue.value) + parseInt(memberRev15));
                totalRev20 = (parseInt(calcInput__revenue.value) + parseInt(memberRev20));

        const   percentIncrease10 = (((totalRev10 - calcInput__revenue.value) / calcInput__revenue.value) * 100).toFixed(0);
                percentIncrease15 = (((totalRev15 - calcInput__revenue.value) / calcInput__revenue.value) * 100).toFixed(0);
                percentIncrease20 = (((totalRev20 - calcInput__revenue.value) / calcInput__revenue.value) * 100).toFixed(0);

        const   radio10 = document.getElementById('radio10');
                radio15 = document.getElementById('radio15');
                radio20 = document.getElementById('radio20');

        // PERCENTAGE CLICK FUNCTIONS
        show15();

        radio10.onclick = function(){
            const memrev15 = document.querySelectorAll('.memberRev15');
            for (let i = 0; i < memrev15.length; i++){
                memrev15[i].style.display = 'none';
            }
            const memrev20 = document.querySelectorAll('.memberRev20');
            for (let i = 0; i < memrev20.length; i++){
                memrev20[i].style.display = 'none';
            }
            const mr10 = document.querySelectorAll('.memberRev10');
            for (i = 0; i < mr10.length; i++){
                mr10[i].style.display = 'inherit';
                mr10[i].innerHTML = (`$${formatter.format(memberRev10)}`);
            }
            
            const pt15 = document.querySelectorAll('.percentText15');
            for (i = 0; i < pt15.length; i++){
                pt15[i].style.display = 'none';
            }
            const pt20 = document.querySelectorAll('.percentText20');
            for (i = 0; i < pt15.length; i++){
                pt20[i].style.display = 'none';
            }
            const pt10 = document.querySelectorAll('.percentText10');
            for (i = 0; i < pt15.length; i++){
                pt10[i].style.display = 'inherit';
            }

            document.querySelector('.unq15').style.display = 'none';
            document.querySelector('.unq20').style.display = 'none';
            document.querySelector('.unq10').style.display = 'inherit';
            document.querySelector('.unq10').innerHTML = formatter.format(unq10num);

            const tr10 = document.querySelectorAll('.totalRev10');
            for (i = 0; i < tr10.length; i++){
                tr10[i].style.display = 'inherit';
                tr10[i].innerHTML = (`$${formatter.format(totalRev10)}`);
            }
            const tr15 = document.querySelectorAll('.totalRev15');
            for (i = 0; i < tr15.length; i++){
                tr15[i].style.display = 'none';
            }
            const tr20 = document.querySelectorAll('.totalRev20');
            for (i = 0; i < tr20.length; i++){
                tr20[i].style.display = 'none';
            }
            document.querySelector('.percentIncrease10').innerHTML = (`${formatter.format(percentIncrease10)}%`);
            document.querySelector('.percentIncrease10').style.display = 'inherit';
            document.querySelector('.percentIncrease15').style.display = 'none';
            document.querySelector('.percentIncrease20').style.display = 'none';
            window.location = '#breakdown';
        }

        radio15.onclick = function(){
            show15();
        }

        radio20.onclick = function(){
            const memrev15 = document.querySelectorAll('.memberRev15');
            for (let i = 0; i < memrev15.length; i++){
                memrev15[i].style.display = 'none';
            }
            const memrev10 = document.querySelectorAll('.memberRev10');
            for (let i = 0; i < memrev10.length; i++){
                memrev10[i].style.display = 'none';
            }
            const mr20 = document.querySelectorAll('.memberRev20');
            for (i = 0; i < mr20.length; i++){
                mr20[i].style.display = 'inherit';
                mr20[i].innerHTML = (`$${formatter.format(memberRev20)}`);
            }

            const pt15 = document.querySelectorAll('.percentText15');
            for (i = 0; i < pt15.length; i++){
                pt15[i].style.display = 'none';
            }
            const pt20 = document.querySelectorAll('.percentText20');
            for (i = 0; i < pt15.length; i++){
                pt20[i].style.display = 'inherit';
            }
            const pt10 = document.querySelectorAll('.percentText10');
            for (i = 0; i < pt15.length; i++){
                pt10[i].style.display = 'none';
            }

            document.querySelector('.unq10').style.display = 'none';
            document.querySelector('.unq15').style.display = 'none';
            document.querySelector('.unq20').style.display = 'inherit';
            document.querySelector('.unq20').innerHTML = formatter.format(unq20num);

            const tr10 = document.querySelectorAll('.totalRev10');
            for (i = 0; i < tr10.length; i++){
                tr10[i].style.display = 'none';
            }
            const tr15 = document.querySelectorAll('.totalRev15');
            for (i = 0; i < tr15.length; i++){
                tr15[i].style.display = 'none';
            }
            const tr20 = document.querySelectorAll('.totalRev20');
            for (i = 0; i < tr20.length; i++){
                tr20[i].style.display = 'inherit';
                tr20[i].innerHTML = (`$${formatter.format(totalRev20)}`);
            }
            document.querySelector('.percentIncrease20').innerHTML = (`${formatter.format(percentIncrease20)}%`);
            document.querySelector('.percentIncrease20').style.display = 'inherit';
            document.querySelector('.percentIncrease15').style.display = 'none';
            document.querySelector('.percentIncrease10').style.display = 'none';
            window.location = '#breakdown';
        }

        document.getElementById('radio15').click() = true;
    }

    

}