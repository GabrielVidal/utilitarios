<script type="text/javascript">
    $(function(){

        var $priceFixo = $('#price-fixo');

        $(window).scroll(function () {

            var scrollTop = $(this).scrollTop();

            $priceFixo.css({
                'top':(scrollTop+400)+'px'
            });
            console.log(scrollTop);
            if ( scrollTop > 100 && scrollTop < 1900) {
                $priceFixo.css({
                    'display':'block'
                });
            } else {
                $priceFixo.css({
                    'display':'none'
                });
            }
        });
    });
</script>